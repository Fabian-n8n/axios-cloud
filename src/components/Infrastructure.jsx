import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Globe, Wifi, Server, Shield } from 'lucide-react';

// Approximate world map dot positions (left%, top%)
const regions = [
  { name: 'US East', x: 23, y: 38, status: 'active' },
  { name: 'US West', x: 11, y: 36, status: 'active' },
  { name: 'US Central', x: 18, y: 37, status: 'active' },
  { name: 'Canada', x: 21, y: 30, status: 'active' },
  { name: 'São Paulo', x: 30, y: 68, status: 'active' },
  { name: 'London', x: 46, y: 29, status: 'active' },
  { name: 'Frankfurt', x: 49, y: 28, status: 'active' },
  { name: 'Paris', x: 47, y: 30, status: 'active' },
  { name: 'Amsterdam', x: 48, y: 27, status: 'active' },
  { name: 'Stockholm', x: 50, y: 23, status: 'active' },
  { name: 'Dubai', x: 57, y: 43, status: 'active' },
  { name: 'Mumbai', x: 63, y: 45, status: 'active' },
  { name: 'Singapore', x: 73, y: 53, status: 'active' },
  { name: 'Tokyo', x: 82, y: 33, status: 'active' },
  { name: 'Seoul', x: 80, y: 31, status: 'active' },
  { name: 'Sydney', x: 84, y: 74, status: 'active' },
  { name: 'Hong Kong', x: 78, y: 40, status: 'active' },
  { name: 'Johannesburg', x: 52, y: 72, status: 'active' },
  { name: 'Cape Town', x: 50, y: 78, status: 'active' },
  { name: 'Osaka', x: 83, y: 35, status: 'active' },
];

const infraStats = [
  { icon: Globe, label: 'Global Regions', value: '42' },
  { icon: Wifi, label: 'Network Capacity', value: '200 Tbps' },
  { icon: Server, label: 'Bare Metal Nodes', value: '500K+' },
  { icon: Shield, label: 'DDoS Mitigation', value: '5 Tbps' },
];

export default function Infrastructure() {
  const headerRef = useScrollReveal();
  const mapRef = useScrollReveal({ threshold: 0.1 });
  const statsRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="infrastructure" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="reveal text-center mb-14">
          <div className="section-label mx-auto mb-5">
            <Globe className="w-3.5 h-3.5" />
            Global Infrastructure
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Your users are everywhere.
            <br />
            <span className="text-accent-light">So are we.</span>
          </h2>
          <p className="text-muted-light text-lg max-w-2xl mx-auto">
            42 regions. 200+ edge PoPs. Every packet routed over our private backbone for minimal latency and maximum resilience.
          </p>
        </div>

        {/* World Map */}
        <div ref={mapRef} className="reveal relative mb-14">
          <div className="relative aspect-[2/1] bg-bg-card border border-bg-border rounded-2xl overflow-hidden">
            {/* Grid overlay */}
            <div className="absolute inset-0 grid-bg opacity-40" />

            {/* Glow center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-36 bg-accent/10 blur-3xl rounded-full" />

            {/* Continent outlines (simplified SVG) */}
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              viewBox="0 0 1000 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* North America */}
              <path d="M80 80 L220 70 L240 120 L220 200 L180 240 L140 260 L100 220 L70 180 Z" fill="#3b82f6" />
              {/* South America */}
              <path d="M200 280 L260 270 L280 320 L270 380 L240 410 L210 400 L190 360 L185 310 Z" fill="#3b82f6" />
              {/* Europe */}
              <path d="M440 80 L540 75 L550 130 L520 160 L470 165 L445 140 Z" fill="#3b82f6" />
              {/* Africa */}
              <path d="M460 190 L540 180 L560 250 L550 350 L510 390 L470 380 L450 310 L440 240 Z" fill="#3b82f6" />
              {/* Asia */}
              <path d="M560 60 L860 50 L880 200 L820 250 L760 260 L700 230 L640 240 L580 200 L550 140 Z" fill="#3b82f6" />
              {/* Australia */}
              <path d="M760 330 L860 320 L880 380 L850 420 L790 430 L750 400 L740 360 Z" fill="#3b82f6" />
            </svg>

            {/* Region dots */}
            {regions.map((region) => (
              <div
                key={region.name}
                className="map-dot"
                style={{
                  left: `${region.x}%`,
                  top: `${region.y}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
                title={region.name}
              />
            ))}

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-bg/80 backdrop-blur border border-bg-border rounded-lg px-3 py-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent shadow-glow-sm" />
                <span className="text-muted-light">Active region</span>
              </div>
            </div>

            {/* Live indicator */}
            <div className="absolute top-4 right-4">
              <div className="uptime-badge text-xs">
                <span className="uptime-dot" />
                Live network status
              </div>
            </div>
          </div>
        </div>

        {/* Infra Stats */}
        <div ref={statsRef} className="stagger-children grid grid-cols-2 md:grid-cols-4 gap-4">
          {infraStats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="reveal bg-bg-card border border-bg-border rounded-xl p-5 text-center">
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <Icon className="w-4 h-4 text-accent" />
              </div>
              <div className="text-xl font-bold text-white mb-1">{value}</div>
              <div className="text-xs text-muted-light">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
