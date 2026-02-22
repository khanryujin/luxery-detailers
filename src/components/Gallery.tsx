import React from 'react';
import { BeforeAfter } from './BeforeAfter';
import { motion } from 'motion/react';

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-brand-card/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">The Transformation.</h2>
          <p className="text-brand-text-muted text-lg max-w-2xl mx-auto">
            Drag the slider to see the incredible results of our multi-stage paint correction and ceramic coating process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <BeforeAfter 
              beforeImage="https://images.unsplash.com/photo-1507136566006-bb71ef556e3f?q=80&w=1000&auto=format&fit=crop"
              afterImage="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop"
              className="shadow-2xl ring-1 ring-white/10"
            />
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "Paint Correction",
                desc: "We removed 95% of surface defects, restoring deep clarity and mirror-like reflection to this obsidian black finish."
              },
              {
                title: "Ceramic Protection",
                desc: "Coated with our flagship 5-year ceramic, providing extreme chemical resistance and self-cleaning properties."
              },
              {
                title: "Wheel Restoration",
                desc: "Deep cleaned and coated wheels to prevent brake dust buildup and simplify future maintenance."
              }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-brand-accent font-bold">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-brand-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
