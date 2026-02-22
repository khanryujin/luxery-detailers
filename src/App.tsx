import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar } from 'lucide-react';

export default function App() {
  const [showStickyCTA, setShowStickyCTA] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-accent selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <section className="py-12 bg-brand-accent">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">
                Ready to transform your vehicle? <br />
                <span className="text-white/70">Book your premium detail today.</span>
              </h2>
              <button className="bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
                Get a Quote
              </button>
            </div>
          </div>
        </section>

        <Services />
        <Gallery />
        <Testimonials />

        {/* Final CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=2048&auto=format&fit=crop" 
              alt="Workshop" 
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-transparent to-brand-bg" />
          </div>

          <div className="container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 text-gradient">
                Your Vehicle Deserves <br /> the Best.
              </h2>
              <p className="text-brand-text-muted text-xl max-w-2xl mx-auto mb-12">
                Join our exclusive clientele and experience the LuxeDetail difference. Limited slots available for this month.
              </p>
              <button className="bg-brand-accent text-white px-12 py-6 rounded-full font-bold uppercase tracking-[0.2em] text-lg hover:scale-105 transition-all shadow-[0_0_50px_rgba(61,126,255,0.4)]">
                Reserve Your Slot
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Sticky Book Now CTA */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <button className="flex items-center gap-3 bg-white text-black px-6 py-4 rounded-2xl font-bold uppercase tracking-widest shadow-2xl hover:bg-brand-accent hover:text-white transition-all group">
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
