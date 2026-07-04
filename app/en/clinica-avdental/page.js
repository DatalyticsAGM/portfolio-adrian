export const metadata = {
  title: 'AVdental Clinic — Adrián Gallardo',
  description:
    'Data analysis for the AVdental clinic: target-audience segmentation for marketing campaigns with Excel, R and Power BI.'
};

export default function ClinicaAvdental() {
  return (
    <>
      <section className="hero hero-avdental">
        <h1>AVdental Clinic</h1>
        <div className="raya" />
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">Goals and Approach</h2>
          <div className="etapas">
            <div className="etapa">
              <div className="imagen">
                <img src="/images/avd-objetivo.png" alt="Target audience segmentation" />
              </div>
              <h3>Goal</h3>
              <p>Define the target audience to run marketing campaigns efficiently.</p>
            </div>
            <div className="etapa">
              <div className="imagen">
                <img src="/images/avd-tecnologias.png" alt="R, Excel and Power BI" className="contener" />
              </div>
              <h3>Technologies</h3>
              <p>Excel, R and Power BI.</p>
            </div>
            <div className="etapa">
              <div className="imagen">
                <img src="/images/avd-solucion.png" alt="Aesthetic dental treatments" />
              </div>
              <h3>Solution</h3>
              <p>
                Target audience: women looking for aesthetic treatments during the autumn and
                winter season.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion gris">
        <div className="contenedor">
          <h2 className="titulo-seccion">AVdental Dashboard</h2>
          <div className="imagen-destacada">
            <img src="/images/avd-dashboard.png" alt="AVdental dashboard in Power BI" />
            <p className="nota">* Data has been modified to protect AVdental’s privacy.</p>
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">Extract, Transform, Load (ETL)</h2>
          <div className="video-marco">
            <iframe
              src="https://drive.google.com/file/d/10Fo7yiTx4TUOFqJr8fRBlfRKRFwrqES6/preview"
              title="RStudio: AVdental ETL process"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="seccion gris">
        <div className="contenedor">
          <h2 className="titulo-seccion">Dashboard Video</h2>
          <div className="video-marco">
            <iframe
              src="https://drive.google.com/file/d/1hXLRkWod01-GYHfwoLi00B5t4-LT5Pgm/preview"
              title="AVdental dashboard walkthrough"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
