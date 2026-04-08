'use client';

import React, { useState } from 'react';

export default function AdminDashboard() {
  const [topic, setTopic] = useState('');
  const [status, setStatus] = useState('Standby');

  const handleSignal = () => {
    setStatus('Synchronizing with repositories...');
    setTimeout(() => {
      setStatus('Success: Data Synced.');
      setTopic('');
    }, 2000);
  };

  return (
    <div className="container" style={{ marginTop: '60px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
        <h1 style={{ fontSize: '2rem' }}>Content <span style={{ color: 'var(--primary)' }}>Manager</span></h1>
        <div style={{ backgroundColor: '#f1f5f9', padding: '8px 16px', borderRadius: '8px', fontSize: '0.9rem' }}>
          System Status: <span style={{ color: status.includes('Success') ? '#10b981' : 'var(--foreground)', fontWeight: '600' }}>{status}</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px' }}>
        <div className="card" style={{ backgroundColor: 'white' }}>
          <h3 style={{ marginBottom: '16px' }}>Request Content Sync</h3>
          <p style={{ marginBottom: '24px', fontSize: '0.95rem' }}>
            Enter a specific topic or library unit to trigger a manual synchronization. 
            The system will fetch and optimize relevant resources.
          </p>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '500' }}>Focus Topic / Unit ID</label>
            <input 
              type="text" 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. Physics Grade 12 - Units 4-6" 
              style={{ 
                width: '100%', 
                padding: '12px', 
                backgroundColor: '#f8fafc', 
                border: '1px solid var(--border)',
                borderRadius: '8px',
                outline: 'none'
              }} 
            />
          </div>

          <button 
            className="btn-primary" 
            style={{ width: '100%', padding: '14px', borderRadius: '8px' }}
            onClick={handleSignal}
            disabled={!topic}
          >
            Trigger Repository Sync 📡
          </button>
        </div>

        <div className="card" style={{ backgroundColor: 'white' }}>
          <h3 style={{ marginBottom: '20px' }}>Recent Sync Logs</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
             <div style={{ padding: '12px', borderBottom: '1px solid #f1f5f9' }}>
                <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>Biology: Human Anatomy</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Verified & Published (2 hrs ago)</div>
             </div>
             <div style={{ padding: '12px', borderBottom: '1px solid #f1f5f9' }}>
                <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>Math: Linear Equations</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Verified & Published (5 hrs ago)</div>
             </div>
             <div style={{ padding: '12px' }}>
                <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>English: Past Tense</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Sync Completed (12 hrs ago)</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
