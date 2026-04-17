export const SITE_URL = (
  import.meta.env.VITE_SITE_URL?.replace(/\/+$/, "") ?? "https://www.otne.com.br"
);

export function absoluteUrl(pathOrUrl: string): string {
  if (!pathOrUrl) return SITE_URL;
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  if (!pathOrUrl.startsWith("/")) {
    return `${SITE_URL}/${pathOrUrl}`;
  }
  return `${SITE_URL}${pathOrUrl}`;
}
