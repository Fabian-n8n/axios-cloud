import { useRef, useEffect, useState } from 'react';
// videoRef removed — video uses autoPlay, no scrubbing needed
import { Button } from '@/components/ui/button';
import {
  ArrowRight, Play, Shield, Cpu, Globe,
  Zap, Activity, Lock, TrendingUp,
} from 'lucide-react';

const easeOut = (t) => t * (2 - t);

const LABEL_W  = 180;
const LABEL_H  = 48;
const GLOBE_R  = 215;

const LABELS = [
  { icon: Zap,        color: 'cyan',   title: 'Edge CDN',        value: '42 PoPs worldwide',    dot: true,  float: 'float-a', pos: [-320, -155] },
  { icon: Lock,       color: 'purple', title: 'Zero-Trust',      value: 'SOC 2 · HIPAA · GDPR', dot: false, float: 'float-b', pos: [-325,   -4] },
  { icon: Activity,   color: 'green',  title: '99.99% SLA',      value: 'Uptime guaranteed',    dot: true,  float: 'float-c', pos: [-308,  148] },
  { icon: TrendingUp, color: 'purple', title: 'Auto-scaling',    value: '0 → ∞ in seconds',     dot: true,  float: 'float-b', pos: [ 145, -155] },
  { icon: Cpu,        color: 'cyan',   title: '< 1ms Latency',   value: 'p99 globally',         dot: false, float: 'float-a', pos: [ 150,   -4] },
  { icon: Shield,     color: 'blue',   title: 'DDoS Protection', value: '10 Tbps capacity',     dot: false, float: 'float-c', pos: [ 133,  148] },
];

function getLinePoints(pos, cx, cy) {
  const [posX, posY] = pos;
  const labelCx = cx + posX + LABEL_W / 2;
  const labelCy = cy + posY + LABEL_H / 2;
  const dx = labelCx - cx;
  const dy = labelCy - cy;
  const len = Math.sqrt(dx * dx + dy * dy);
  const gx = cx + (dx / len) * GLOBE_R;
  const gy = cy + (dy / len) * GLOBE_R;
  let ax, ay;
  if (Math.abs(dx) >= Math.abs(dy)) {
    ay = cy + posY + LABEL_H / 2;
    ax = dx > 0 ? cx + posX : cx + posX + LABEL_W;
  } else {
    ax = cx + posX + LABEL_W / 2;
    ay = dy > 0 ? cy + posY : cy + posY + LABEL_H;
  }
  return { gx, gy, ax, ay };
}

export default function Hero() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [vp, setVp] = useState({ w: 1440, h: 900 });

  // Track viewport size for SVG line math
  useEffect(() => {
    const update = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Scroll → drive progress only (video plays freely via autoPlay)
  useEffect(() => {
    let ticking = false;

    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const { top, height } = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(Math.max(-top / (height - vh), 0), 1);
      setProgress(p);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Derived animation values
  const textT       = easeOut(Math.min(progress / 0.4, 1));
  const textOpacity = 1 - textT;
  const textY       = textT * -50;

  // Overlay starts at 0.78 (globe subtly visible) and lifts to 0 on scroll
  const overlayT       = easeOut(Math.min(Math.max((progress - 0.05) / 0.5, 0), 1));
  const overlayOpacity = 0.78 * (1 - overlayT);

  // Exit fade — globe + labels fade back to dark in the last 7% of scroll
  const exitT       = easeOut(Math.min(Math.max((progress - 0.93) / 0.07, 0), 1));
  const exitOpacity = 1 - exitT;

  const labelTs = LABELS.map((_, i) => {
    // Tighter stagger: all 6 labels fully visible by progress ~0.78
    const start = 0.42 + i * 0.06;
    const enter = easeOut(Math.min(Math.max((progress - start) / 0.08, 0), 1));
    return enter * exitOpacity;
  });

  const cx = vp.w / 2;
  const cy = vp.h / 2;

  return (
    <section ref={sectionRef} style={{ height: '240vh', position: 'relative' }}>
      <div
        style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}
        className="flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-bg" />
        <div className="absolute inset-0 grid-bg opacity-40" />

        {/* Globe — plays freely, full-screen cover */}
        <video
          className="absolute inset-0 pointer-events-none select-none"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          src="/hero-sphere-4.mp4"
          autoPlay loop muted playsInline preload="auto"
        />

        {/* Dark overlay that lifts on scroll to progressively reveal the globe */}
        <div className="absolute inset-0 pointer-events-none bg-bg"
          style={{ opacity: overlayOpacity, transition: 'opacity 0.05s linear' }} />

        {/* Exit overlay — fades globe back to dark when scrolling past */}
        <div className="absolute inset-0 pointer-events-none bg-bg"
          style={{ opacity: exitT, transition: 'opacity 0.05s linear' }} />

        {/* Permanent edge vignette — blends video edges into dark bg */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 75% 75% at 50% 50%, transparent 35%, var(--bg) 100%)'
        }} />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/50 pointer-events-none" />

        {/* SVG lines */}
        <svg
          className="absolute inset-0 pointer-events-none"
          style={{ width: '100%', height: '100%', zIndex: 6 }}
        >
          <defs>
            <linearGradient id="line-grad-left" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.5)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0.08)" />
            </linearGradient>
            <linearGradient id="line-grad-right" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.5)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0.08)" />
            </linearGradient>
          </defs>
          {LABELS.map((label, i) => {
            const t = labelTs[i];
            if (t <= 0) return null;
            const { gx, gy, ax, ay } = getLinePoints(label.pos, cx, cy);
            const isLeft = label.pos[0] < 0;
            return (
              <g key={label.title} opacity={t}>
                <line
                  x1={gx} y1={gy} x2={ax} y2={ay}
                  stroke={isLeft ? 'url(#line-grad-left)' : 'url(#line-grad-right)'}
                  strokeWidth="1"
                  strokeDasharray="5 4"
                />
                <circle cx={gx} cy={gy} r="2.5" fill="rgba(59,130,246,0.6)" />
                <circle cx={ax} cy={ay} r="2"   fill="rgba(59,130,246,0.35)" />
              </g>
            );
          })}
        </svg>

        {/* Orbit labels */}
        {LABELS.map((label, i) => {
          const t = labelTs[i];
          const [posX, posY] = label.pos;
          return (
            <div
              key={label.title}
              className="hero-label"
              style={{
                left: `calc(50% + ${posX}px)`,
                top:  `calc(50% + ${posY}px)`,
                opacity: t,
                zIndex: 10,
              }}
            >
              <div className={`hero-label-inner ${t > 0.5 ? label.float : ''}`}>
                <div className={`hero-label-icon ${label.color}`}>
                  <label.icon size={14} />
                </div>
                <div className="hero-label-text">
                  <div className="hero-label-title">{label.title}</div>
                  <div className="hero-label-value">{label.value}</div>
                </div>
                {label.dot && <span className="hero-label-dot" />}
              </div>
            </div>
          );
        })}

        {/* Hero text */}
        <div
          className="relative z-10 max-w-5xl mx-auto px-6 text-center will-change-transform"
          style={{
            marginTop: '148px',
            opacity: textOpacity,
            transform: `translateY(${textY}px)`,
            transition: 'opacity 0.06s linear, transform 0.06s linear',
            pointerEvents: textOpacity < 0.05 ? 'none' : 'auto',
          }}
        >
          <div className="flex justify-center mb-8">
            <div className="uptime-badge">
              <span className="uptime-dot" />
              All systems operational · 99.99% uptime
            </div>
          </div>

          <h1 className="hero-headline mb-6">
            <span className="text-white">Cloud infrastructure</span>
            <br />
            <span className="gradient-text">without limits.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Deploy globally in seconds. Scale infinitely without downtime.
            The enterprise cloud platform trusted by teams building what's next.
          </p>

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

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            {[
              { icon: Shield, label: 'SOC 2 Type II' },
              { icon: Globe,  label: '42 Global Regions' },
              { icon: Cpu,    label: '< 1ms Latency' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-accent" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
