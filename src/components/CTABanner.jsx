import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

export default function CTABanner() {
  const ref = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-20 px-6">
      <div ref={ref} className="reveal max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-accent/20">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-accent-cyan/10" />
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-accent/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-cyan/10 blur-3xl rounded-full" />

          {/* Content */}
          <div className="relative z-10 text-center py-20 px-8">
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                <Zap className="w-6 h-6 text-accent" fill="currentColor" />
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              Ready to build at
              <br />
              <span className="text-accent-light">infinite scale?</span>
            </h2>

            <p className="text-muted-light text-lg mb-10 max-w-xl mx-auto">
              Join 40,000+ engineering teams who chose Axios Cloud as their foundation.
              Deploy your first app in under 2 minutes — free.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" className="group shadow-glow-blue">
                Start building — it's free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="xl" variant="ghost" className="text-white hover:text-white hover:bg-white/10">
                Talk to sales
              </Button>
            </div>

            <p className="mt-6 text-xs text-muted">
              No credit card required · Deploy in 60 seconds · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
