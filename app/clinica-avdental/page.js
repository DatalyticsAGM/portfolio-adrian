export const metadata = {
  title: 'Clínica AVdental — Adrián Gallardo',
  description:
    'Análisis de datos para la clínica AVdental: segmentación de público objetivo para campañas de marketing con Excel, R y Power BI.'
};

export default function ClinicaAvdental() {
  return (
    <>
      <section className="hero hero-avdental">
        <h1>Clínica AVdental</h1>
        <div className="raya" />
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">Etapas y Objetivos</h2>
          <div className="etapas">
            <div className="etapa">
              <div className="imagen">
                <img src="/images/avd-objetivo.png" alt="Segmentación de público objetivo" />
              </div>
              <h3>Objetivo</h3>
              <p>
                Establecer el público objetivo para poder llevar a cabo campañas de marketing de
                manera eficiente.
              </p>
            </div>
            <div className="etapa">
              <div className="imagen">
                <img src="/images/avd-tecnologias.png" alt="R, Excel y Power BI" className="contener" />
              </div>
              <h3>Tecnologías</h3>
              <p>Se han utilizado las tecnologías Excel, R y Power BI.</p>
            </div>
            <div className="etapa">
              <div className="imagen">
                <img src="/images/avd-solucion.png" alt="Servicios estéticos dentales" />
              </div>
              <h3>Solución</h3>
              <p>
                Público objetivo: mujeres que buscan soluciones estéticas en la temporada de otoño
                e invierno.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion gris">
        <div className="contenedor">
          <h2 className="titulo-seccion">Dashboard AVdental</h2>
          <div className="imagen-destacada">
            <img src="/images/avd-dashboard.png" alt="Dashboard de AVdental en Power BI" />
            <p className="nota">
              * Los datos han sido modificados para respetar la privacidad de AVdental.
            </p>
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">Extracción, Transformación y Carga AVdental (ETL)</h2>
          <div className="video-marco">
            <iframe
              src="https://drive.google.com/file/d/10Fo7yiTx4TUOFqJr8fRBlfRKRFwrqES6/preview"
              title="RStudio: proceso ETL de AVdental"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="seccion gris">
        <div className="contenedor">
          <h2 className="titulo-seccion">Vídeo Dashboard AV</h2>
          <div className="video-marco">
            <iframe
              src="https://drive.google.com/file/d/1hXLRkWod01-GYHfwoLi00B5t4-LT5Pgm/preview"
              title="Presentación del dashboard de AVdental"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
