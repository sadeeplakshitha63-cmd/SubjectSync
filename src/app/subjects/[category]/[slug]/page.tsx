import React from 'react';
import { getLessonsBySubject } from '@/lib/content';

export default function LessonPage({ params }: { params: { category: string, slug: string } }) {
  const { category, slug } = params;
  const lessons = getLessonsBySubject(category);
  const lesson = lessons.find(l => l.slug === slug);

  if (!lesson) return <div className="container" style={{ marginTop: '100px' }}>Lesson not found. Sync in progress...</div>;

  return (
    <div className="container" style={{ marginTop: '60px' }}>
      <header style={{ marginBottom: '60px' }}>
         <a href={`../${category}`} style={{ color: 'var(--primary)', fontWeight: '600' }}>← Back to {category}</a>
         <h1 style={{ fontSize: '3rem', fontWeight: '800', marginTop: '24px', lineHeight: '1.2' }}>{lesson.title}</h1>
         <div style={{ padding: '10px 0', borderBottom: '1px solid var(--border)', display: 'flex', gap: '20px', fontSize: '0.9rem', color: 'var(--secondary)' }}>
           <span>Category: {lesson.category}</span>
           <span>Last Sync: {new Date(lesson.publishedAt).toLocaleDateString()}</span>
         </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) 1fr', gap: '60px' }}>
        <article style={{ fontSize: '1.15rem', lineHeight: '1.8', whiteSpace: 'pre-wrap' }}>
          {lesson.content}
        </article>

        <aside>
          <div className="card" style={{ marginBottom: '30px', position: 'sticky', top: '100px' }}>
             <h4 style={{ marginBottom: '16px' }}>Media & Resources</h4>
             {lesson.videoUrl && (
               <iframe 
                  width="100%" 
                  height="200" 
                  src={lesson.videoUrl} 
                  title="Lesson Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
               ></iframe>
             )}
             {lesson.images && lesson.images.map((img: any, i: number) => (
                <div key={i} style={{ marginTop: '20px' }}>
                   <div style={{ width: '100%', height: '150px', backgroundColor: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
                      [Image Placeholder: {img.caption}]
                   </div>
                </div>
             ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
