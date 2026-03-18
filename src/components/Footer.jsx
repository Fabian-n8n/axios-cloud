import { Zap, Github, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  Products: [
    'Compute Engine',
    'Managed Databases',
    'Global CDN',
    'AI & ML Platform',
    'Zero-Trust Security',
    'Private Networking',
  ],
  Developers: [
    'Documentation',
    'API Reference',
    'CLI Tools',
    'SDKs & Libraries',
    'Status Page',
    'Changelog',
  ],
  Company: [
    'About',
    'Blog',
    'Careers',
    'Press',
    'Partners',
    'Contact',
  ],
  Legal: [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'Data Processing',
    'Compliance',
    'Security',
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-bg-border bg-bg-elevated">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="relative w-7 h-7 flex items-center justify-center">
                <div className="absolute inset-0 rounded-md bg-accent/20" />
                <Zap className="w-3.5 h-3.5 text-accent relative z-10" fill="currentColor" />
              </div>
              <span className="text-white font-bold tracking-tight">
                Axios<span className="text-accent">Cloud</span>
              </span>
            </a>
            <p className="text-muted-light text-sm leading-relaxed mb-6 max-w-xs">
              Enterprise cloud infrastructure for teams that demand performance, reliability, and scale.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Github, href: '#', label: 'GitHub' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border border-bg-border flex items-center justify-center text-muted hover:text-white hover:border-accent/40 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted hover:text-muted-light text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-bg-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} Axios Cloud, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted">
            <span className="uptime-dot" />
            <span>All systems operational</span>
            <span className="mx-2">·</span>
            <span>99.99% uptime this month</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
