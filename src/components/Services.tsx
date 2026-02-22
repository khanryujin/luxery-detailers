import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Droplets, Zap, Camera, Clock } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const services = [
  {
    title: "Ceramic Coating",
    description: "9H hardness protection that creates a permanent bond with your paint for ultimate gloss and hydrophobicity.",
    icon: Shield,
    className: "md:col-span-2 md:row-span-2 bg-brand-accent/10 border-brand-accent/20",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Paint Correction",
    description: "Multi-stage machine polishing to remove swirls, scratches, and oxidation.",
    icon: Sparkles,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Interior Restoration",
    description: "Deep steam cleaning and conditioning for all surfaces.",
    icon: Droplets,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Engine Bay Detail",
    description: "Safe and thorough cleaning of your engine compartment.",
    icon: Zap,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Wheel & Caliper Coating",
    description: "High-temperature protection for your most vulnerable parts.",
    icon: Clock,
    className: "md:col-span-1 md:row-span-1",
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-brand-bg">
      <div className="container">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Mastering the Art <br /> of the Detail.</h2>
          <p className="text-brand-text-muted text-lg max-w-xl">
            We offer a comprehensive suite of premium services designed to protect and enhance every inch of your vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative group overflow-hidden rounded-[2rem] p-8 border border-white/5 bg-brand-card hover:border-white/10 transition-all",
                service.className
              )}
            >
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 group-hover:text-brand-accent transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-brand-text-muted leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <button className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 group/btn">
                    Learn More
                    <div className="w-6 h-px bg-white/20 group-hover/btn:w-10 transition-all" />
                  </button>
                </div>
              </div>

              {service.image && (
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-20 group-hover:opacity-40 transition-opacity">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover rounded-tl-[2rem]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
