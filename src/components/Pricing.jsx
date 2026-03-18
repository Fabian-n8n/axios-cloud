import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'Free forever',
    description: 'For indie devs and side projects. No credit card required.',
    badge: null,
    featured: false,
    cta: 'Get started free',
    ctaVariant: 'secondary',
    features: [
      '3 projects',
      '512 MB RAM per container',
      '10 GB bandwidth/mo',
      'Shared compute',
      'Community support',
      'US East region',
    ],
  },
  {
    name: 'Pro',
    price: '$49',
    period: 'per month',
    description: 'For growing teams shipping production workloads daily.',
    badge: 'Most popular',
    featured: true,
    cta: 'Start free trial',
    ctaVariant: 'default',
    features: [
      'Unlimited projects',
      '8 GB RAM per container',
      '1 TB bandwidth/mo',
      'Dedicated compute',
      'Priority support (24h SLA)',
      '12 global regions',
      'Auto-scaling',
      'Custom domains + SSL',
      'Team collaboration',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'volume pricing',
    description: 'For large-scale deployments with security and compliance requirements.',
    badge: null,
    featured: false,
    cta: 'Talk to sales',
    ctaVariant: 'outline',
    features: [
      'Everything in Pro',
      'Unlimited compute & storage',
      'Dedicated infrastructure',
      'All 42 global regions',
      'SLA 99.99% uptime guarantee',
      'Dedicated support (1h SLA)',
      'SOC 2 / HIPAA / GDPR',
      'SSO + SAML + SCIM',
      'Custom contracts & invoicing',
      'Private peering & VPC',
    ],
  },
];

export default function Pricing() {
  const headerRef = useScrollReveal();
  const cardsRef = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="reveal text-center mb-16">
          <div className="section-label mx-auto mb-5">
            <Zap className="w-3.5 h-3.5" />
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Start free.
            <br />
            <span className="text-accent-light">Scale when you're ready.</span>
          </h2>
          <p className="text-muted-light text-lg max-w-xl mx-auto">
            No hidden fees. No surprise bills. Predictable pricing that scales with your growth.
          </p>
        </div>

        <div ref={cardsRef} className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div key={plan.name} className="flex flex-col">
              {/* Badge slot — same height for every column */}
              <div className="h-7 flex items-center justify-center mb-3">
                {plan.badge && (
                  <Badge variant="default" className="shadow-glow-sm px-4 py-1 text-xs">
                    {plan.badge}
                  </Badge>
                )}
              </div>

              <div className={`pricing-card ${plan.featured ? 'featured' : ''} flex flex-col flex-1`}>
                <div className="mb-6">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-muted mb-3">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    <span className="text-muted-light text-sm">/{plan.period}</span>
                  </div>
                  <p className="text-muted-light text-sm">{plan.description}</p>
                </div>

                <Button
                  variant={plan.ctaVariant}
                  className="w-full mb-6"
                  size="lg"
                >
                  {plan.cta}
                </Button>

                <div className="flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted">
            Need a custom plan?{' '}
            <a href="#" className="text-accent-light hover:underline">Contact our sales team</a>
            {' '}— we'll tailor a solution that fits.
          </p>
        </div>
      </div>
    </section>
  );
}
