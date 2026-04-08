import React from 'react';

export default function Home() {
  return (
    <div className="container" style={{ marginTop: '80px' }}>
      <header style={{ textAlign: 'center', marginBottom: '100px' }}>
        <div style={{ 
          display: 'inline-block', 
          padding: '6px 16px', 
          backgroundColor: '#eff6ff', 
          color: 'var(--primary)', 
          borderRadius: '50px',
          fontSize: '0.85rem',
          fontWeight: '600',
          marginBottom: '24px'
        }}>
          New: Science Syllabus Updates
        </div>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '24px' }}>
          Your Education, <br />
          <span style={{ color: 'var(--primary)' }}>Synchronized</span> Perfectly.
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '650px', margin: '0 auto 48px' }}>
          Access official Sri Lankan syllabus materials, past papers, and premium global 
          resources in one unified platform.
        </p>
        
        <div className="search-box">
          <input type="text" placeholder="Search subjects, topics, or papers..." />
          <button className="btn-primary" style={{ padding: '10px 32px', borderRadius: '50px' }}>Search</button>
        </div>
      </header>

      <section style={{ marginBottom: '120px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.75rem' }}>Explore Categories</h2>
          <a href="./all-subjects" style={{ color: 'var(--primary)', fontWeight: '600' }}>View All →</a>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          <div className="card">
            <div style={{ fontSize: '24px', marginBottom: '16px' }}>📐</div>
            <h3 style={{ marginBottom: '12px' }}>Mathematics</h3>
            <p style={{ fontSize: '0.95rem' }}>Core curriculum and advanced problem sets for secondary levels.</p>
          </div>
          <div className="card">
            <div style={{ fontSize: '24px', marginBottom: '16px' }}>🔬</div>
            <h3 style={{ marginBottom: '12px' }}>Physical Science</h3>
            <p style={{ fontSize: '0.95rem' }}>Detailed notes on Biology, Chemistry, and Physics essentials.</p>
          </div>
          <div className="card">
            <div style={{ fontSize: '24px', marginBottom: '16px' }}>💡</div>
            <h3 style={{ marginBottom: '12px' }}>Information Tech</h3>
            <p style={{ fontSize: '0.95rem' }}>Master coding and web development with practical guides.</p>
          </div>
          <div className="card">
            <div style={{ fontSize: '24px', marginBottom: '16px' }}>🌍</div>
            <h3 style={{ marginBottom: '12px' }}>Linguistics</h3>
            <p style={{ fontSize: '0.95rem' }}>Comprehensive guides for English, Sinhala, and Literature.</p>
          </div>
        </div>
      </section>

      <section style={{ 
        backgroundColor: '#f8fafc', 
        borderRadius: '24px', 
        padding: '60px',
        display: 'flex', 
        alignItems: 'center', 
        gap: '60px' 
      }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '24px' }}>The Sync Engine</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '32px' }}>
            Our smart synchronization engine works around the clock to fetch updates 
            from official government portals and international education hubs. 
            We ensure you always have the latest curriculum versions.
          </p>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'center' }}>
              <span style={{ color: '#10b981', fontWeight: '700' }}>✓</span> 15+ Official Data Sources
            </li>
            <li style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'center' }}>
              <span style={{ color: '#10b981', fontWeight: '700' }}>✓</span> Verified Past Paper Collections
            </li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span style={{ color: '#10b981', fontWeight: '700' }}>✓</span> Real-time Syllabus Alerts
            </li>
          </ul>
        </div>
        <div style={{ flex: 1, backgroundColor: 'white', height: '300px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
          {/* Dashboard Preview Graphic */}
        </div>
      </section>
    </div>
  );
}
