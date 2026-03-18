import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Shield, Cpu, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dark base */}
      <div className="absolute inset-0 bg-bg" />

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Sphere watermark — centered */}
      <video
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] max-w-none opacity-20 pointer-events-none select-none"
        src="/hero-sphere-2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Fade sphere edges into background */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-transparent to-bg pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/50 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="flex justify-center mb-8">
          <div className="uptime-badge">
            <span className="uptime-dot" />
            All systems operational · 99.99% uptime
          </div>
        </div>

        {/* Headline */}
        <h1 className="hero-headline mb-6">
          <span className="text-white">Cloud infrastructure</span>
          <br />
          <span className="gradient-text">without limits.</span>
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-muted-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Deploy globally in seconds. Scale infinitely without downtime.
          The enterprise cloud platform trusted by teams building what's next.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button size="xl" className="group">
            Start for free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="xl" variant="secondary" className="group gap-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-full border border-accent/30 text-accent">
              <Play className="w-3 h-3 fill-current" />
            </span>
            Watch demo
          </Button>
        </div>

        {/* Terminal snippet */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="terminal">
            <div className="terminal-header">
              <span className="terminal-dot bg-red-500/70" />
              <span className="terminal-dot bg-yellow-500/70" />
              <span className="terminal-dot bg-green-500/70" />
              <span className="ml-2 text-muted text-xs">axios-cloud CLI</span>
            </div>
            <div className="terminal-body text-left">
              <p><span className="text-muted">$</span> <span className="text-accent-cyan">npm</span> install -g <span className="text-accent-light">@axios/cloud</span></p>
              <p><span className="text-muted">$</span> <span className="text-accent-cyan">axios</span> deploy <span className="text-yellow-400">--region</span> global</p>
              <p className="text-emerald-400">✓ Deployed to 42 regions in 1.2s</p>
              <p className="text-emerald-400">✓ Edge network active · CDN propagated</p>
              <p><span className="text-muted-light">→</span> <span className="text-accent-light underline">https://app.axios.cloud</span></p>
            </div>
          </div>
        </div>

        {/* Trust pills */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
          {[
            { icon: Shield, label: 'SOC 2 Type II' },
            { icon: Globe, label: '42 Global Regions' },
            { icon: Cpu, label: '< 1ms Latency' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-accent" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
    </section>
  );
}
