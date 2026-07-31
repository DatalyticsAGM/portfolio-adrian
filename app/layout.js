import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Adrián Gallardo — Data Analyst & Business Intelligence',
  description:
    'Analista de datos y Business Intelligence en Alicante: dashboards en Power BI, ETL con SQL y Python, Machine Learning y reporting. Con base en control de gestión financiero.',
  keywords: [
    'data analyst', 'business intelligence', 'analista de datos', 'Power BI', 'SQL',
    'Python', 'machine learning', 'ETL', 'dashboards', 'controller financiero', 'Alicante'
  ],
  openGraph: {
    title: 'Adrián Gallardo — Data Analyst & Business Intelligence',
    description:
      'Convierto los datos en decisiones de negocio: dashboards en Power BI, ETL con SQL y Python, y Machine Learning.',
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
