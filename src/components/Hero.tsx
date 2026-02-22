import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1603584173870-7f3ca99a832d?q=80&w=2048&auto=format&fit=crop" 
          alt="Polished Supercar" 
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-xs font-bold uppercase tracking-[0.2em] mb-6">
              The Gold Standard of Detailing
            </span>
            <h1 className="font-display text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 text-gradient">
              Pristine <br /> Perfection. <br /> Guaranteed.
            </h1>
            <p className="text-brand-text-muted text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
              Experience the transformational magic of professional ceramic coating and precision detailing. We don't just clean cars; we restore masterpieces.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="group bg-brand-accent text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-blue-600 transition-all shadow-[0_0_30px_rgba(61,126,255,0.4)]">
                Book Your Session
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group flex items-center gap-3 px-8 py-4 text-white font-bold uppercase tracking-wider hover:text-brand-accent transition-colors">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-accent transition-colors">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                See Our Work
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Stats or Badges */}
      <div className="absolute bottom-12 left-0 right-0 z-10 hidden lg:block">
        <div className="container">
          <div className="flex gap-12 border-t border-white/10 pt-8">
            {[
              { label: 'Vehicles Perfected', value: '2,500+' },
              { label: 'Ceramic Coatings', value: '1,200+' },
              { label: 'Customer Rating', value: '4.9/5.0' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold font-display">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-brand-text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
