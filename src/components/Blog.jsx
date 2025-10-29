import React from 'react';
import { Link } from 'react-router-dom';

// Use Vite's import.meta.glob to gather markdown posts
const postFiles = import.meta.glob('../posts/*.md', { eager: true, as: 'raw' });

function parseFrontmatter(raw) {
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) return { meta: {}, content: raw };
  const fm = fmMatch[1];
  const meta = {};
  fm.split('\n').forEach(line => {
    const [k, ...rest] = line.split(':');
    meta[k.trim()] = rest.join(':').trim();
  });
  const content = raw.slice(fmMatch[0].length).trim();
  return { meta, content };
}

export default function Blog() {
  const posts = Object.entries(postFiles).map(([path, raw]) => {
    const { meta } = parseFrontmatter(raw);
    const slug = path.split('/').pop().replace('.md', '');
    return { slug, title: meta.title || slug, date: meta.date || '' };
  }).sort((a,b) => (b.date || '').localeCompare(a.date || ''));

  return (
    <div className="section">
      <h2 className="text-2xl font-semibold mb-6">Articles</h2>
      <ul className="space-y-4">
        {posts.map(p => (
          <li key={p.slug} className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800">
            <Link to={`/blog/${p.slug}`} className="text-lg text-emerald-400 font-semibold">{p.title}</Link>
            <div className="text-sm text-zinc-400">{p.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
