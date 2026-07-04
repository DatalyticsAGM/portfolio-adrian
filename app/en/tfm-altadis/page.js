export const metadata = {
  title: 'Master’s Thesis — End-to-End BI System for Altadis | Adrián Gallardo',
  description:
    'Master’s thesis (UNIR): from data to decision. ETL in R, PostgreSQL Data Warehouse and executive Power BI dashboards with clustering and predictive models.'
};

const LINKEDIN_URL = 'https://www.linkedin.com/in/adriangallardomu%C3%B1oz/';

export default function TfmAltadis() {
  return (
    <>
      <section className="hero hero-cielo">
        <h1>Thesis — End-to-End BI System for Altadis</h1>
        <p className="subtitulo">From data to decision</p>
        <div className="raya" />
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">The Project</h2>
          <p className="subtitulo-seccion">
            Master’s thesis for the Master’s Degree in Business Intelligence (UNIR), built as a
            team: a complete BI system for Altadis (Imperial Brands) that turns scattered data
            into sales, logistics and inventory decisions.
          </p>
          <div className="etapas">
            <div className="etapa">
              <div className="imagen"><div style={{ fontSize: '3.5rem' }}>🎯</div></div>
              <h3>Goal</h3>
              <p>
                Integrate multiple data sources into a single BI system that optimises decisions
                on sales, shipments, stock-outs and delivery routes.
              </p>
            </div>
            <div className="etapa">
              <div className="imagen"><div style={{ fontSize: '3.5rem' }}>🏗️</div></div>
              <h3>Architecture</h3>
              <p>
                ETL in R (tidyverse) → PostgreSQL Data Warehouse with a star schema (4 fact
                tables) → executive dashboards in Power BI.
              </p>
            </div>
            <div className="etapa">
              <div className="imagen"><div style={{ fontSize: '3.5rem' }}>📈</div></div>
              <h3>Results</h3>
              <p>
                KPIs and interactive visualisations per area, plus clustering (K-Means, PCA) and
                predictive models to optimise commercial and logistics decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion gris">
        <div className="contenedor">
          <h2 className="titulo-seccion">The Dashboard in Action</h2>
          <p className="subtitulo-seccion">
            A video tour of the interactive Power BI report: sales, shipments, stock-outs and
            routes.
          </p>
          <div className="linkedin-embed">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7429434632561102848"
              title="Thesis dashboard video in Power BI"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">What the System Includes</h2>
          <div className="bloque-analisis">
            <div className="grafico">
              <img src="/images/tfm-portada.jpg" alt="Power BI report cover for Imperial Brands (Altadis)" />
            </div>
            <div>
              <h3>Four analysis areas</h3>
              <ul>
                <li><strong>Sales:</strong> detailed analysis by location and performance by product and size.</li>
                <li><strong>Shipments:</strong> logistics monitoring with a geographic focus to spot bottlenecks.</li>
                <li><strong>Stock-outs:</strong> missed-opportunity losses by store and time-based incident analysis.</li>
                <li><strong>Routes:</strong> delivery optimisation and service efficiency per point of sale.</li>
              </ul>
              <p style={{ marginTop: '0.8rem' }}>
                Navigation designed with storytelling: from the general to the particular, with a
                single source of truth thanks to the data model.
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
          <h2 className="titulo-seccion">Project Documentation</h2>
          <p className="subtitulo-seccion">
            Browse the presentation and the full document right here, or download them as PDF
            (in Spanish).
          </p>

          <h3 style={{ marginTop: '2.5rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            The Presentation
          </h3>
          <p className="subtitulo-seccion" style={{ marginBottom: '1.2rem' }}>
            The slides defended before the examination board.
          </p>
          <a href="/docs/tfm-altadis-presentacion.pdf" download className="boton grande">
            Download the presentation (PDF)
          </a>
          <div className="cv-visor" style={{ marginTop: '2rem' }}>
            <iframe
              src="/docs/tfm-altadis-presentacion.pdf"
              title="Thesis presentation: End-to-End BI System for Altadis"
            />
          </div>

          <h3 style={{ marginTop: '3.5rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            The Full Document
          </h3>
          <p className="subtitulo-seccion" style={{ marginBottom: '1.2rem' }}>
            The complete Master’s thesis report.
          </p>
          <a href="/docs/tfm-altadis.pdf" download className="boton grande">
            Download the thesis (PDF)
          </a>
          <div className="cv-visor" style={{ marginTop: '2rem' }}>
            <iframe src="/docs/tfm-altadis.pdf" title="Thesis: End-to-End BI System for Altadis" />
          </div>
          <p className="nota" style={{ marginTop: '1.5rem' }}>
            Also published on{' '}
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
              my LinkedIn profile
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
