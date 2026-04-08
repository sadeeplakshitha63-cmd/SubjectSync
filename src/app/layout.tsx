import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SubjectSync | Modern Learning Platform",
  description: "Synchronizing global and local educational resources for a better learning experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <nav>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="logo-text">SubjectSync</div>
            <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
              <a href="./" style={{ color: 'var(--foreground)', fontWeight: '500' }}>Home</a>
              <a href="./subjects" style={{ color: 'var(--foreground)', fontWeight: '500' }}>Subjects</a>
              <a href="./library" style={{ color: 'var(--foreground)', fontWeight: '500' }}>Library</a>
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
        </nav>
        <main>
          {children}
        </main>
        <footer style={{ 
          marginTop: '100px', 
          padding: '60px 0', 
          backgroundColor: '#f8fafc',
          borderTop: '1px solid var(--border)'
        }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div className="logo-text" style={{ marginBottom: '20px' }}>SubjectSync</div>
            <p>© 2026 SubjectSync. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
