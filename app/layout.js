import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Adrián Gallardo — Data Analyst & Business Intelligence',
  description:
    'Analista de datos y Business Intelligence en Alicante: dashboards en Power BI, ETL con Power Query y SQL, y reporting para la toma de decisiones. Con base en control de gestión.',
  keywords: [
    'data analyst', 'business intelligence', 'analista de datos', 'Power BI', 'Excel avanzado',
    'Power Query', 'SQL', 'ETL', 'dashboards', 'reporting', 'KPI', 'Alicante'
  ],
  openGraph: {
    title: 'Adrián Gallardo — Data Analyst & Business Intelligence',
    description:
      'Convierto los datos en decisiones de negocio: dashboards en Power BI, ETL con Power Query y SQL, y reporting.',
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
