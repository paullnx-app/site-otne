"use client";

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
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              We Speak <span className="text-primary">Data</span>, <br />
              Not Assumptions.
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Traditional SEO is guessing. We use algorithmic modeling to predict ranking opportunities before your competitors even know they exist.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-4xl font-display font-bold text-foreground mb-1">+145%</h3>
                <p className="text-sm text-muted-foreground font-medium">Avg. Traffic Increase</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-4xl font-display font-bold text-foreground mb-1">3.5x</h3>
                <p className="text-sm text-muted-foreground font-medium">ROI Multiplier</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white border border-border p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Organic Traffic Growth</p>
                  <h4 className="text-2xl font-bold text-foreground">18,240 <span className="text-green-600 text-sm font-bold ml-2 bg-green-100 px-2 py-0.5 rounded-full">▲ 12%</span></h4>
                </div>
                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                  Live Data
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(22, 100%, 58%)" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="hsl(22, 100%, 58%)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="name" 
                      stroke="#94a3b8" 
                      fontSize={12} 
                      tickLine={false} 
                      axisLine={false}
                    />
                    <YAxis 
                      stroke="#94a3b8" 
                      fontSize={12} 
                      tickLine={false} 
                      axisLine={false}
                      tickFormatter={(value) => `${value/1000}k`}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#fff', borderColor: '#e2e8f0', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                      itemStyle={{ color: '#1e293b', fontWeight: 'bold' }}
                      labelStyle={{ color: '#64748b' }}
                    />
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
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
