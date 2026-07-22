import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'MOASA HOUSING — Enterprise Architecture & Construction',
  description: 'Design-build execution powered by uncompromising structural integrity, visual weight, and industrial precision. We build space that commands respect.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-wrapper">
          <div className="grid-overlay">
            <div className="grid-col"></div>
            <div className="grid-col"></div>
            <div className="grid-col"></div>
            <div className="grid-col"></div>
          </div>
          <Navbar />
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
