import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "We migrated from AWS to Axios Cloud and cut our infrastructure bill by 40% while reducing deploy times from 20 minutes to under 90 seconds. It's genuinely remarkable.",
    author: 'Sarah Chen',
    role: 'VP Engineering',
    company: 'Finova',
    initials: 'SC',
    accent: 'bg-accent',
  },
  {
    quote: "The global edge network is a game-changer. Our users in Southeast Asia now experience the same <5ms latency as users in New York. Axios Cloud made that effortless.",
    author: 'Marcus Webb',
    role: 'CTO',
    company: 'Streamline Analytics',
    initials: 'MW',
    accent: 'bg-accent-cyan',
  },
  {
    quote: "Auto-scaling just works. During our Black Friday spike — 80x normal traffic — Axios Cloud scaled in 12 seconds. We didn't even get paged. That's the dream.",
    author: 'Priya Radhakrishnan',
    role: 'Head of Infrastructure',
    company: 'CartPilot',
    initials: 'PR',
    accent: 'bg-accent-purple',
  },
  {
    quote: "SOC 2 compliance used to be a 6-month project. With Axios Cloud's built-in security controls and audit tooling, we achieved it in 3 weeks. Our investors loved it.",
    author: 'Jordan Kessler',
    role: 'Co-Founder & CEO',
    company: 'SecureVault',
    initials: 'JK',
    accent: 'bg-emerald-500',
  },
  {
    quote: "We're training 70B parameter models on Axios Cloud's H100 cluster. The managed MLOps toolchain means our data science team ships to production 3x faster than before.",
    author: 'Dr. Aiko Tanaka',
    role: 'Director of AI',
    company: 'Luminary Labs',
    initials: 'AT',
    accent: 'bg-accent',
  },
  {
    quote: "The developer experience is unmatched. From `git push` to live on 42 regions in under 2 seconds. We've deprecated our entire internal DevOps toolchain.",
    author: 'Tom Baxter',
    role: 'Principal Engineer',
    company: 'Vortex Systems',
    initials: 'TB',
    accent: 'bg-accent-cyan',
  },
];

export default function Testimonials() {
  const headerRef = useScrollReveal();
  const col1Ref = useScrollReveal({ threshold: 0.05 });
  const col2Ref = useScrollReveal({ threshold: 0.05 });
  const col3Ref = useScrollReveal({ threshold: 0.05 });

  const col1 = testimonials.slice(0, 2);
  const col2 = testimonials.slice(2, 4);
  const col3 = testimonials.slice(4, 6);
  const colRefs = [col1Ref, col2Ref, col3Ref];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="reveal text-center mb-16">
          <div className="section-label mx-auto mb-5">
            <Quote className="w-3.5 h-3.5" />
            Customer stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Loved by engineers.
            <br />
            <span className="text-accent-light">Trusted by their teams.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[col1, col2, col3].map((col, colIndex) => (
            <div
              key={colIndex}
              ref={colRefs[colIndex]}
              className="stagger-children space-y-5"
              style={{ marginTop: colIndex === 1 ? '2rem' : '0' }}
            >
              {col.map((t) => (
                <div
                  key={t.author}
                  className="bg-bg-card border border-bg-border rounded-2xl p-6 hover:border-accent/20 transition-colors"
                >
                  <Quote className="w-5 h-5 text-accent/40 mb-3" />
                  <p className="text-sm text-muted-light leading-relaxed mb-5">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full ${t.accent} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{t.author}</p>
                      <p className="text-muted text-xs">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
