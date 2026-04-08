import React from 'react';
import { getCategories } from '@/lib/content';

export default function SubjectsPage() {
  const { subjects, languages } = getCategories();

  return (
    <div className="container" style={{ marginTop: '60px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Our Educational <span style={{ color: 'var(--primary)' }}>Library</span></h1>
      
      <section style={{ marginBottom: '80px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--secondary)' }}>Government Syllabus (1-13)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {subjects.map((s: any) => (
            <a href={`./subjects/${s.id}`} key={s.id} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{s.icon}</div>
              <h3 style={{ marginBottom: '8px' }}>{s.title}</h3>
              <p style={{ fontSize: '0.9rem' }}>Comprehensive resources and sync logs for {s.title}.</p>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--secondary)' }}>Humanized Languages</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {languages.map((l: any) => (
            <a href={`./subjects/${l.id}`} key={l.id} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{l.icon}</div>
              <h3 style={{ marginBottom: '8px' }}>{l.title}</h3>
              <p style={{ fontSize: '0.9rem' }}>Master {l.title} with our synchronized learning units.</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
