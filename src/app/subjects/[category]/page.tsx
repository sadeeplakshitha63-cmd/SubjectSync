import React from 'react';
import { getLessonsBySubject } from '@/lib/content';

export default function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params;
  const lessons = getLessonsBySubject(category);

  return (
    <div className="container" style={{ marginTop: '60px' }}>
      <div style={{ marginBottom: '48px' }}>
        <a href="../subjects" style={{ color: 'var(--primary)', fontWeight: '600' }}>← Back to All Subjects</a>
        <h1 style={{ fontSize: '2.5rem', marginTop: '20px', textTransform: 'capitalize' }}>
           {category} <span style={{ color: 'var(--secondary)' }}>Resources</span>
        </h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
        {lessons.length > 0 ? lessons.map((lesson: any) => (
          <a 
            href={`./${category}/${lesson.slug}`} 
            key={lesson.slug} 
            className="card" 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <div>
              <h3 style={{ marginBottom: '4px' }}>{lesson.title}</h3>
              <p style={{ fontSize: '0.85rem' }}>Synchronized on {new Date(lesson.publishedAt).toLocaleDateString()}</p>
            </div>
            <div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Read Lesson →</div>
          </a>
        )) : (
          <div className="card" style={{ padding: '60px', textAlign: 'center' }}>
            <p>Synchronization in progress... Please check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
}
