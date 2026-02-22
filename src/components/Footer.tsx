import React from 'react';
import { Car, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-bg pt-24 pb-12 border-t border-white/5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
                <Car className="text-white w-5 h-5" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight uppercase">LuxeDetail</span>
            </div>
            <p className="text-brand-text-muted leading-relaxed mb-8">
              The premier destination for luxury automotive care and protection. Restoring perfection, one vehicle at a time.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                  <Icon className="w-5 h-5 text-brand-text-muted" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4 text-brand-text-muted">
              <li><a href="#" className="hover:text-white transition-colors">Ceramic Coating</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Paint Correction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Interior Detail</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Window Tinting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-4 text-brand-text-muted">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4 text-brand-text-muted">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-accent" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-accent" />
                hello@luxedetail.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-accent" />
                123 Precision Way, Auto City
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4 text-sm text-brand-text-muted">
          <p>© 2024 LuxeDetail. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
