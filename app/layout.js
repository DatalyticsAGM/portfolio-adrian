import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Adrián Gallardo — Controller Financiero & Data Analyst',
  description:
    'Controller financiero y analista de datos en Alicante: control presupuestario, análisis de rentabilidad, reporting a dirección y Business Intelligence con Power BI, SQL, R y Python.',
  keywords: [
    'controller financiero', 'data analyst', 'business intelligence', 'Power BI', 'SQL',
    'control de gestión', 'reporting', 'presupuestos', 'Alicante'
  ],
  openGraph: {
    title: 'Adrián Gallardo — Controller Financiero & Data Analyst',
    description:
      'Convierto los datos en decisiones de negocio: control presupuestario, reporting y Business Intelligence.',
    type: 'website',
    locale: 'es_ES',
    images: ['/images/foto-adrian.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
