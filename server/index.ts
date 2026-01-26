import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

// IMPORTS extras para resolver caminho do index.html
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Necessário para __dirname em módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  })
);
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const pathReq = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (pathReq.startsWith("/api")) {
      let logLine = `${req.method} ${pathReq} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // DEV: Vite com HMR
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    // PROD: servir estáticos
    serveStatic(app);

    // >>> Fallback SPA: QUALQUER rota não-API devolve o mesmo index.html
    app.get("*", (req, res) => {
      // Ajuste este caminho se o build do client estiver em outro lugar
      const indexPath = path.resolve(__dirname, "../client/dist/index.html");
      res.sendFile(indexPath);
    });
    // <<< fim fallback SPA
  }

  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    }
  );
})();