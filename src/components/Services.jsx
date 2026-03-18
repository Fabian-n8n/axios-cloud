import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Badge } from '@/components/ui/badge';
import {
  Cpu, Database, Globe, Lock, BrainCircuit, Network,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Cpu,
    name: 'Compute Engine',
    badge: 'Core',
    badgeVariant: 'default',
    description: 'Bare-metal performance in the cloud. From shared vCPUs to dedicated GPU instances optimized for every workload.',
    tags: ['Auto-scaling', 'Spot instances', 'GPU clusters'],
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: Database,
    name: 'Managed Databases',
    badge: 'Popular',
    badgeVariant: 'cyan',
    description: 'Fully managed PostgreSQL, MySQL, Redis, and MongoDB. Automated backups, point-in-time recovery, read replicas.',
    tags: ['Postgres', 'Redis', 'MongoDB'],
    color: 'text-accent-cyan',
    bg: 'bg-accent-cyan/10',
  },
  {
    icon: Globe,
    name: 'Global CDN',
    badge: 'Edge',
    badgeVariant: 'purple',
    description: 'Sub-10ms edge delivery across 42 PoPs worldwide. Intelligent routing, cache optimization, and DDoS protection built in.',
    tags: ['42 PoPs', 'Smart routing', 'DDoS protection'],
    color: 'text-accent-purple',
    bg: 'bg-accent-purple/10',
  },
  {
    icon: BrainCircuit,
    name: 'AI & ML Platform',
    badge: 'New',
    badgeVariant: 'green',
    description: 'Train, fine-tune, and deploy models at scale. H100 GPU clusters, managed inference endpoints, and MLOps toolchain.',
    tags: ['H100 GPUs', 'Inference API', 'MLflow'],
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Lock,
    name: 'Zero-Trust Security',
    badge: 'Core',
    badgeVariant: 'default',
    description: 'SOC 2 Type II compliant. End-to-end encryption, IAM, secrets management, and real-time threat detection.',
    tags: ['SOC 2', 'Zero-trust', 'Vault'],
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: Network,
    name: 'Private Networking',
    badge: 'Enterprise',
    badgeVariant: 'secondary',
    description: 'Dedicated VPCs, private subnets, VPN gateways, and direct peering. Your infrastructure, isolated and sovereign.',
    tags: ['VPC', 'PrivateLink', 'BGP peering'],
    color: 'text-accent-cyan',
    bg: 'bg-accent-cyan/10',
  },
];

export default function Services() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="services" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="reveal text-center mb-16">
          <div className="section-label mx-auto mb-5">
            <Network className="w-3.5 h-3.5" />
            Cloud Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Everything your stack needs,
            <br />
            <span className="text-accent-light">nothing it doesn't.</span>
          </h2>
          <p className="text-muted-light text-lg max-w-2xl mx-auto">
            A complete cloud platform — compute, storage, networking, AI, and security — unified under one control plane.
          </p>
        </div>

        <div ref={gridRef} className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.name} className="service-card group">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg ${service.bg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${service.color}`} />
                  </div>
                  <Badge variant={service.badgeVariant}>{service.badge}</Badge>
                </div>

                <h3 className="text-white font-semibold text-lg mb-2">{service.name}</h3>
                <p className="text-muted-light text-sm leading-relaxed mb-4">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 bg-bg-elevated border border-bg-border rounded-full text-muted-light">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href="#" className={`inline-flex items-center gap-1 text-xs font-semibold ${service.color} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  Learn more <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
