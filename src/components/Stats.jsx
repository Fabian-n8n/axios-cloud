import { useCounter } from '@/hooks/useCounter';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const stats = [
  { value: 9999, suffix: '%', label: 'Uptime SLA', prefix: '', decimals: 2, display: '99.99' },
  { value: 42, suffix: '', label: 'Global Regions', prefix: '' },
  { value: 1, suffix: 'ms', label: 'P99 Latency', prefix: '<' },
  { value: 40000, suffix: '+', label: 'Enterprise Customers', prefix: '' },
];

function StatItem({ stat }) {
  const { count, ref } = useCounter(stat.value, 2200);
  const revealRef = useScrollReveal({ threshold: 0.3 });

  const displayValue = stat.display
    ? stat.display
    : stat.value >= 1000
      ? count.toLocaleString()
      : count;

  return (
    <div
      ref={(el) => {
        ref.current = el;
        revealRef.current = el;
      }}
      className="reveal text-center px-8 py-6"
    >
      <div className="stat-value mb-1">
        <span className="text-muted-light text-3xl font-light">{stat.prefix}</span>
        {displayValue}
        <span className="text-accent-cyan">{stat.suffix}</span>
      </div>
      <p className="text-muted text-sm font-medium tracking-wide">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  const headerRef = useScrollReveal();

  return (
    <section className="py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="reveal text-center mb-10">
          <p className="text-muted text-sm font-medium uppercase tracking-widest">
            By the numbers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-bg-border border border-bg-border rounded-2xl overflow-hidden">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
