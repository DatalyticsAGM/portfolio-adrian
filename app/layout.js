import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Adrián Gallardo — Data Analyst',
  description:
    'Portafolio de Adrián Gallardo, analista de datos: dashboards en Power BI, ETL con SQL y Python, modelos predictivos y consultoría en Business Intelligence.'
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
