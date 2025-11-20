import { motion } from "framer-motion";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card } from "@/components/ui/card";

const data = [
  { name: 'Jan', traffic: 4000 },
  { name: 'Feb', traffic: 5500 },
  { name: 'Mar', traffic: 4800 },
  { name: 'Apr', traffic: 7000 },
  { name: 'May', traffic: 9500 },
  { name: 'Jun', traffic: 13000 },
  { name: 'Jul', traffic: 18000 },
];

export function Stats() {
  return (
    <section id="results" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              We Speak <span className="text-primary">Data</span>, <br />
              Not Assumptions.
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Traditional SEO is guessing. We use algorithmic modeling to predict ranking opportunities before your competitors even know they exist.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-primary pl-6">
                <h3 className="text-4xl font-display font-bold text-white mb-1">+145%</h3>
                <p className="text-sm text-muted-foreground">Avg. Traffic Increase</p>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <h3 className="text-4xl font-display font-bold text-white mb-1">3.5x</h3>
                <p className="text-sm text-muted-foreground">ROI Multiplier</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-card/50 border-white/10 p-6 backdrop-blur-sm shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Organic Traffic Growth</p>
                  <h4 className="text-2xl font-bold text-white">18,240 <span className="text-primary text-sm font-normal ml-2">▲ 12% this week</span></h4>
                </div>
                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                  Live Data
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(22, 100%, 58%)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(22, 100%, 58%)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="name" 
                      stroke="#333" 
                      fontSize={12} 
                      tickLine={false} 
                      axisLine={false}
                    />
                    <YAxis 
                      stroke="#333" 
                      fontSize={12} 
                      tickLine={false} 
                      axisLine={false}
                      tickFormatter={(value) => `${value/1000}k`}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#111', borderColor: '#333', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                    <Area 
                      type="monotone" 
                      dataKey="traffic" 
                      stroke="hsl(22, 100%, 58%)" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorTraffic)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
