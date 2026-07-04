export const metadata = {
  title: 'Dashboards — Adrián Gallardo',
  description:
    'Dashboards and automations: Human Resources, Power Query, a B2B portal and world population with life expectancy.'
};

export default function Dashboards() {
  return (
    <>
      <section className="hero hero-cielo">
        <h1>Dashboards</h1>
        <div className="raya" />
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">Human Resources Dashboard</h2>
          <p className="subtitulo-seccion">
            Interactive report covering headcount, salaries, seniority and the geographic
            distribution of a company’s employees.
          </p>
          <div className="imagen-destacada">
            <img src="/images/dash-rrhh.gif" alt="Human Resources dashboard in motion" />
          </div>
        </div>
      </section>

      <section className="seccion gris">
        <div className="contenedor">
          <h2 className="titulo-seccion">Database Automation & Cleaning with Power Query</h2>
          <p className="subtitulo-seccion">Automatic database cleaning and consolidation with Power Query.</p>
          <div className="video-marco">
            <iframe
              src="https://drive.google.com/file/d/191tr3By_naQpP0CrTuAMfer1nskScNGK/preview"
              title="Database automation and cleaning with Power Query"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">B2B Portal</h2>
          <p className="subtitulo-seccion">Demo of a B2B portal with user access.</p>
          <div className="video-marco">
            <iframe
              src="https://drive.google.com/file/d/1AE_HKd4kRqvxsIgZzwOD5UvIfkm7we_b/preview"
              title="B2B portal demo"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="seccion gris">
        <div className="contenedor">
          <h2 className="titulo-seccion">World Population & Life Expectancy Dashboard</h2>
          <p className="subtitulo-seccion">Visual analysis of population by area and life expectancy worldwide.</p>
          <div className="video-marco">
            <iframe
              src="https://drive.google.com/file/d/13UbJpHYdaf96cLt4y46gXDB-iygGPvNp/preview"
              title="World population and life expectancy dashboard"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
