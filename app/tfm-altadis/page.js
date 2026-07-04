export const metadata = {
  title: 'TFM — Sistema Integral de BI para Altadis | Adrián Gallardo',
  description:
    'Trabajo de Fin de Máster (UNIR): del dato a la decisión. ETL en R, Data Warehouse en PostgreSQL y dashboards ejecutivos en Power BI con clustering y modelos predictivos.'
};

const LINKEDIN_URL = 'https://www.linkedin.com/in/adriangallardomu%C3%B1oz/';

export default function TfmAltadis() {
  return (
    <>
      <section className="hero hero-cielo">
        <h1>TFM — Sistema Integral de BI para Altadis</h1>
        <p className="subtitulo">Desde el dato hasta la decisión</p>
        <div className="raya" />
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">El Proyecto</h2>
          <p className="subtitulo-seccion">
            Trabajo de Fin de Máster del Máster Universitario en Inteligencia de Negocio (UNIR),
            desarrollado en equipo: un sistema completo de Business Intelligence para Altadis
            (Imperial Brands) que convierte datos dispersos en decisiones de ventas, logística e
            inventario.
          </p>
          <div className="etapas">
            <div className="etapa">
              <div className="imagen"><div style={{ fontSize: '3.5rem' }}>🎯</div></div>
              <h3>Objetivo</h3>
              <p>
                Integrar múltiples fuentes de datos en un sistema único de BI que optimice la toma
                de decisiones en ventas, envíos, roturas de stock y rutas de entrega.
              </p>
            </div>
            <div className="etapa">
              <div className="imagen"><div style={{ fontSize: '3.5rem' }}>🏗️</div></div>
              <h3>Arquitectura</h3>
              <p>
                ETL en R (tidyverse) → Data Warehouse en PostgreSQL con modelo en estrella (4
                tablas de hechos) → dashboards ejecutivos en Power BI.
              </p>
            </div>
            <div className="etapa">
              <div className="imagen"><div style={{ fontSize: '3.5rem' }}>📈</div></div>
              <h3>Resultados</h3>
              <p>
                KPIs y visualizaciones interactivas por área, más modelos de clustering (K-Means,
                PCA) y predicción para optimizar decisiones comerciales y logísticas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion gris">
        <div className="contenedor">
          <h2 className="titulo-seccion">El Dashboard en Acción</h2>
          <p className="subtitulo-seccion">
            Recorrido en vídeo por el reporte interactivo de Power BI: ventas, envíos, roturas de
            stock y rutas.
          </p>
          <div className="linkedin-embed">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7429434632561102848"
              title="Vídeo del dashboard del TFM en Power BI"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">Qué incluye el sistema</h2>
          <div className="bloque-analisis">
            <div className="grafico">
              <img src="/images/card-dashboards.jpg" alt="Dashboard ejecutivo en Power BI" />
            </div>
            <div>
              <h3>Cuatro ejes de análisis</h3>
              <ul>
                <li><strong>Ventas:</strong> análisis por localización y rendimiento por producto y tamaño.</li>
                <li><strong>Envíos:</strong> monitorización logística con enfoque geográfico para detectar cuellos de botella.</li>
                <li><strong>Roturas de stock:</strong> pérdidas de oportunidad por tienda y análisis temporal de incidencias.</li>
                <li><strong>Rutas:</strong> optimización de entregas y eficiencia del servicio por punto de venta.</li>
              </ul>
              <p style={{ marginTop: '0.8rem' }}>
                Navegación pensada con storytelling: de lo general a lo particular, con una única
                verdad del dato gracias al modelado.
              </p>
            </div>
          </div>
          <div className="badges centrado" style={{ marginTop: '2.5rem', justifyContent: 'center' }}>
            <span>R / tidyverse</span><span>SQL</span><span>PostgreSQL</span><span>Data Warehouse</span>
            <span>Power BI</span><span>DAX</span><span>K-Means</span><span>PCA</span><span>ETL</span>
          </div>
        </div>
      </section>

      <section className="seccion gris">
        <div className="contenedor" style={{ textAlign: 'center' }}>
          <h2 className="titulo-seccion">Documentación del Proyecto</h2>
          <p className="subtitulo-seccion">
            Consulta el documento completo aquí mismo o descárgalo en PDF.
          </p>
          <a href="/docs/tfm-altadis.pdf" download className="boton grande">
            Descargar el TFM (PDF)
          </a>
          <div className="cv-visor" style={{ marginTop: '2rem' }}>
            <iframe
              src="/docs/tfm-altadis.pdf"
              title="TFM: Sistema Integral de BI para Altadis"
            />
          </div>
          <p className="nota" style={{ marginTop: '1.5rem' }}>
            También publicado en{' '}
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
              mi perfil de LinkedIn
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
