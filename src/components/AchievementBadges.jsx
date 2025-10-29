import React, { useState } from 'react';

const badges = [
  {
    name: 'AWS Certified Developer',
    image: '/assets/aws-certified-developer.svg',
    issued: '2023',
    credentialId: 'AWS-DEV-123456',
    tooltip: 'Issued: 2023 | Credential ID: AWS-DEV-123456',
  },
  {
    name: 'Oracle Java SE 11 Developer',
    image: '/assets/oracle-java-se-11.svg',
    issued: '2022',
    credentialId: 'ORCL-JAVA-789012',
    tooltip: 'Issued: 2022 | Credential ID: ORCL-JAVA-789012',
  },
  {
    name: 'Spring Professional',
    image: '/assets/spring-professional.svg',
    issued: '2021',
    credentialId: 'SPRING-PRO-345678',
    tooltip: 'Issued: 2021 | Credential ID: SPRING-PRO-345678',
  },
];

export default function AchievementBadges() {
  const [open, setOpen] = useState({});

  const toggle = (i) => setOpen((s) => ({ ...s, [i]: !s[i] }));

  const copyCredential = (id) => {
    if (navigator.clipboard) navigator.clipboard.writeText(id);
  };

  return (
    <section className="my-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Certifications & Badges</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {badges.map((badge, idx) => (
          <div key={idx} className="relative group w-56 bg-zinc-900 rounded-2xl border border-emerald-400 shadow-lg p-4">
            <div className="flex items-center gap-4">
              {/** image may be missing if files not in `public/assets` — show fallback initials on error */}
              <BadgeImage src={badge.image} alt={badge.name} initials={badge.name.split(' ').map(n => n[0]).slice(0,2).join('')} />
              <div>
                <div className="font-semibold text-white">{badge.name}</div>
                <div className="text-xs text-zinc-400">Issued: {badge.issued}</div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-2">
              <button
                aria-expanded={!!open[idx]}
                onClick={() => toggle(idx)}
                className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-200 hover:bg-zinc-700 transition"
              >
                {open[idx] ? 'Hide log' : 'View log'}
              </button>
              <button
                onClick={() => copyCredential(badge.credentialId)}
                className="px-3 py-1 rounded-full border border-zinc-700 text-sm text-zinc-200 hover:bg-zinc-800 transition"
                title="Copy credential ID"
              >
                Copy ID
              </button>
            </div>

            <div className={`mt-3 text-sm text-zinc-300 overflow-hidden transition-all ${open[idx] ? 'max-h-48' : 'max-h-0'}`} aria-hidden={!open[idx]}>
              <div className="mb-2">Credential ID: <span className="text-emerald-300 font-mono">{badge.credentialId}</span></div>
              <div className="mb-2">Issuer: <span className="text-zinc-200">{badge.name.split(' ')[0]}</span></div>
              <div className="mb-2">Notes: Verified via issuer portal.</div>
              {/* If you have verification links, add them here */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BadgeImage({ src, alt, initials }) {
  const [broken, setBroken] = React.useState(false);

  if (!src || broken) {
    return (
      <div className="w-14 h-14 rounded-full flex items-center justify-center bg-emerald-600 text-white font-bold">{initials}</div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-14 h-14 object-contain"
      onError={() => {
        console.warn('Badge image failed to load:', src);
        setBroken(true);
      }}
    />
  );
}
