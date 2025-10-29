import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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

export default function BlogPost() {
  const { slug } = useParams();
  const filePath = `../posts/${slug}.md`;
  const raw = postFiles[filePath];

  if (!raw) {
    return (
      <div className="section">
        <h2 className="text-2xl font-semibold mb-4">Post not found</h2>
        <Link to="/blog" className="text-emerald-400">Back to blog</Link>
      </div>
    );
  }

  const { meta, content } = parseFrontmatter(raw);

  return (
    <div className="section max-w-3xl">
      <Link to="/blog" className="text-emerald-400">← Back</Link>
      <h1 className="text-3xl font-bold mt-4 mb-2">{meta.title}</h1>
      <div className="text-sm text-zinc-400 mb-6">{meta.date}</div>
      <article className="prose prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
