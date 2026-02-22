import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "James Wilson",
    role: "Porsche 911 GT3 Owner",
    content: "The attention to detail is simply unmatched. My car looks better than the day I picked it up from the showroom. The ceramic coating makes maintenance a breeze.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Tesla Model S Plaid Owner",
    content: "I was skeptical about paint correction, but after seeing the results on my black Tesla, I'm a believer. Every swirl mark is gone. Truly professional service.",
    rating: 5
  },
  {
    name: "Michael Ross",
    role: "Range Rover Autobiography Owner",
    content: "LuxeDetail is the only place I trust with my vehicles. Their interior restoration work is incredible – they managed to make the leather feel brand new again.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-gradient">What Our Clients Say.</h2>
          <p className="text-brand-text-muted text-lg max-w-2xl mx-auto">
            Join hundreds of satisfied luxury vehicle owners who trust LuxeDetail for their automotive care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-[2.5rem] relative group hover:bg-white/10 transition-all duration-500"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-brand-accent/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                ))}
              </div>

              <p className="text-lg leading-relaxed mb-8 italic text-white/90">
                "{t.content}"
              </p>

              <div>
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-sm text-brand-text-muted">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonial Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 relative aspect-video max-w-4xl mx-auto rounded-[3rem] overflow-hidden border border-white/10 group cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1542362567-b055002b91f4?q=80&w=2048&auto=format&fit=crop" 
            alt="Video Testimonial" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-accent transition-all duration-300">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
            </div>
          </div>
          <div className="absolute bottom-8 left-8">
            <div className="text-white font-bold text-xl mb-1">Watch: The Ultimate Restoration</div>
            <div className="text-white/60 text-sm uppercase tracking-widest">Ferrari 488 Pista Full Detail</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
