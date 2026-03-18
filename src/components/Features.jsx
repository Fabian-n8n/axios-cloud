import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Zap, RefreshCw, Eye, Layers } from 'lucide-react';

const features = [
  {
    icon: Zap,
    eyebrow: 'Instant deploy',
    title: 'Zero-downtime deployments at the speed of git push.',
    description:
      'Atomic deploys with automatic rollback. Blue-green, canary, and feature-flag strategies available out of the box. Ship faster with total confidence.',
    visual: 'deploy',
    color: 'text-accent',
    glowColor: 'rgba(59,130,246,0.3)',
  },
  {
    icon: RefreshCw,
    eyebrow: 'Auto-scaling',
    title: 'Scales from zero to a million without you lifting a finger.',
    description:
      'Predictive autoscaling uses ML to anticipate traffic spikes before they happen. Never over-provision. Never get caught off-guard.',
    visual: 'scale',
    color: 'text-accent-cyan',
    glowColor: 'rgba(6,182,212,0.3)',
  },
  {
    icon: Eye,
    eyebrow: 'Observability',
    title: 'See everything. Miss nothing. Act in milliseconds.',
    description:
      'Full-stack observability: distributed traces, real-time metrics, structured logs, and AI-assisted anomaly detection — unified in one dashboard.',
    visual: 'observe',
    color: 'text-accent-purple',
    glowColor: 'rgba(139,92,246,0.3)',
  },
  {
    icon: Layers,
    eyebrow: 'Multi-cloud',
    title: 'One control plane. Any cloud underneath.',
    description:
      'Run workloads across AWS, GCP, Azure, and bare metal from a single pane of glass. Avoid lock-in, optimize cost, and stay resilient.',
    visual: 'multi',
    color: 'text-emerald-400',
    glowColor: 'rgba(16,185,129,0.3)',
  },
];

function DeployVisual() {
  return (
    <div className="relative h-48 flex items-center justify-center">
      <div className="space-y-2 w-full max-w-xs">
        {['main → production', 'canary (5%)', 'staging', 'preview'].map((env, i) => (
          <div key={env} className="flex items-center gap-3 bg-bg-elevated border border-bg-border rounded-lg px-4 py-2.5">
            <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-emerald-400' : i === 1 ? 'bg-yellow-400' : 'bg-accent'}`} />
            <span className="text-xs font-mono text-muted-light">{env}</span>
            {i === 0 && <span className="ml-auto text-xs text-emerald-400 font-semibold">Live</span>}
            {i === 1 && <span className="ml-auto text-xs text-yellow-400 font-semibold">Rolling</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

function ScaleVisual() {
  const bars = [20, 35, 25, 60, 90, 75, 40, 55, 80, 95, 70, 45];
  return (
    <div className="relative h-48 flex items-end justify-center gap-1.5 px-4">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm bg-gradient-to-t from-accent to-accent-cyan opacity-80"
          style={{ height: `${h}%`, animationDelay: `${i * 100}ms` }}
        />
      ))}
      <div className="absolute top-2 right-4 bg-bg-card border border-accent/30 rounded-lg px-3 py-1.5 text-xs font-mono text-accent-light">
        +240% traffic · Auto-scaled ✓
      </div>
    </div>
  );
}

function ObserveVisual() {
  return (
    <div className="relative h-48 flex items-center justify-center px-4">
      <div className="w-full space-y-3">
        {[
          { label: 'Latency p99', value: '1.2ms', color: 'bg-emerald-500', width: '12' },
          { label: 'Error rate', value: '0.001%', color: 'bg-accent', width: '2' },
          { label: 'Throughput', value: '2.4M rps', color: 'bg-accent-cyan', width: '80' },
        ].map(({ label, value, color, width }) => (
          <div key={label}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-muted-light">{label}</span>
              <span className="text-white font-mono font-semibold">{value}</span>
            </div>
            <div className="h-1.5 bg-bg-elevated rounded-full overflow-hidden">
              <div className={`h-full ${color} rounded-full`} style={{ width: `${width}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MultiVisual() {
  const clouds = [
    { name: 'AWS', color: 'text-yellow-400', x: '15%', y: '30%' },
    { name: 'GCP', color: 'text-accent', x: '60%', y: '20%' },
    { name: 'Azure', color: 'text-accent-cyan', x: '75%', y: '65%' },
    { name: 'Bare Metal', color: 'text-emerald-400', x: '20%', y: '70%' },
  ];
  return (
    <div className="relative h-48">
      {/* Center node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center z-10">
        <span className="text-xs font-bold text-accent">Axios</span>
      </div>
      {clouds.map(({ name, color, x, y }) => (
        <div key={name} className="absolute" style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}>
          <div className="bg-bg-card border border-bg-border rounded-lg px-2.5 py-1.5 text-xs font-semibold">
            <span className={color}>{name}</span>
          </div>
          {/* Line to center - just visual dots */}
          <div className="absolute inset-0 pointer-events-none" />
        </div>
      ))}
    </div>
  );
}

const visuals = {
  deploy: DeployVisual,
  scale: ScaleVisual,
  observe: ObserveVisual,
  multi: MultiVisual,
};

export default function Features() {
  const headerRef = useScrollReveal();

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="reveal text-center mb-16">
          <div className="section-label mx-auto mb-5">
            <Zap className="w-3.5 h-3.5" />
            Platform Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Built for teams that
            <br />
            <span className="text-accent-light">refuse to compromise.</span>
          </h2>
          <p className="text-muted-light text-lg max-w-2xl mx-auto">
            The details that separate world-class infrastructure from everything else.
          </p>
        </div>

        <div className="space-y-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const Visual = visuals[feature.visual];
            const isEven = i % 2 === 0;
            const ref = useScrollReveal({ threshold: 0.1 });

            return (
              <div
                key={feature.title}
                ref={ref}
                className={`reveal grid md:grid-cols-2 gap-8 items-center rounded-2xl border border-bg-border bg-bg-card overflow-hidden`}
              >
                {/* Text */}
                <div className={`p-8 md:p-12 ${isEven ? '' : 'md:order-last'}`}>
                  <div className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest ${feature.color} mb-4`}>
                    <Icon className="w-4 h-4" />
                    {feature.eyebrow}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-light leading-relaxed">{feature.description}</p>
                </div>

                {/* Visual */}
                <div
                  className="p-8 border-t md:border-t-0 border-bg-border bg-bg-elevated"
                  style={{ borderLeft: isEven ? '1px solid var(--bg-border)' : 'none', borderRight: !isEven ? '1px solid var(--bg-border)' : 'none' }}
                >
                  <Visual />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
