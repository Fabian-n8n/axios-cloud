import { useRef } from 'react';
import { useNavScroll } from '@/hooks/useNavScroll';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { label: 'Products', href: '#services' },
  { label: 'Features', href: '#features' },
  { label: 'Infrastructure', href: '#infrastructure' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#' },
];

export default function Navbar() {
  const navRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  useNavScroll(navRef);

  return (
    <nav ref={navRef} className="navbar">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors" />
            <Zap className="w-4 h-4 text-accent relative z-10" fill="currentColor" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            Axios<span className="text-accent">Cloud</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="px-3 py-2 text-sm text-muted-light hover:text-white transition-colors rounded-md hover:bg-bg-elevated"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-muted-light hover:text-white transition-colors">
            Sign in
          </a>
          <Button size="sm">
            Start free →
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-muted-light hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 mx-4 bg-bg-card border border-bg-border rounded-xl p-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-4 py-2.5 text-sm text-muted-light hover:text-white hover:bg-bg-elevated rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 mt-2 border-t border-bg-border flex flex-col gap-2">
            <Button variant="secondary" className="w-full justify-center">Sign in</Button>
            <Button className="w-full justify-center">Start free →</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
