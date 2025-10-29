import React, { useEffect, useState } from 'react';
import { FaStar, FaGithub } from 'react-icons/fa';

export default function OpenSourceShowcase({ username = 'viswanadh2000' }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const url = `https://api.github.com/users/${username}/repos?sort=stars&per_page=3`;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message);
        setLoading(false);
      });

    return () => { mounted = false; };
  }, [username]);

  if (loading) return (
    <section className="section">
      <h2 className="text-2xl font-semibold mb-4">Open Source</h2>
      <div>Loading repositories...</div>
    </section>
  );

  if (error) return (
    <section className="section">
      <h2 className="text-2xl font-semibold mb-4">Open Source</h2>
      <div className="text-red-400">Error loading repositories: {error}</div>
    </section>
  );

  return (
    <section className="section">
      <h2 className="text-2xl font-semibold mb-6">Open Source Showcase</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {repos.map((r) => (
          <a key={r.id} href={r.html_url} target="_blank" rel="noopener noreferrer" className="card p-6 hover:scale-105 transition">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaGithub className="text-emerald-400" />
                <div className="font-semibold">{r.name}</div>
              </div>
              <div className="flex items-center gap-1 text-sm text-zinc-300">
                <FaStar className="text-yellow-400" />
                <span>{r.stargazers_count}</span>
              </div>
            </div>
            <p className="text-zinc-300 mt-3">{r.description}</p>
            <div className="text-xs text-zinc-500 mt-4">{r.language}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
