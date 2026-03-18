const logos = [
  { name: 'Stripe', letter: 'S' },
  { name: 'Shopify', letter: 'Sh' },
  { name: 'Figma', letter: 'F' },
  { name: 'Notion', letter: 'N' },
  { name: 'Vercel', letter: 'V' },
  { name: 'Discord', letter: 'D' },
  { name: 'Twilio', letter: 'T' },
  { name: 'Atlassian', letter: 'A' },
  { name: 'HubSpot', letter: 'H' },
  { name: 'Datadog', letter: 'DD' },
  { name: 'Snowflake', letter: 'Sf' },
  { name: 'HashiCorp', letter: 'Hc' },
];

function LogoItem({ name, letter }) {
  return (
    <div className="flex items-center gap-2.5 px-6 select-none">
      <div className="w-7 h-7 rounded-md bg-bg-elevated border border-bg-border flex items-center justify-center text-xs font-bold text-muted-light">
        {letter}
      </div>
      <span className="text-muted font-medium text-sm whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function LogoMarquee() {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-14 border-y border-bg-border relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

      <p className="text-center text-xs font-semibold tracking-widest uppercase text-muted mb-6">
        Trusted by world-class teams
      </p>

      <div className="overflow-hidden">
        <div className="marquee-track">
          {doubled.map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
