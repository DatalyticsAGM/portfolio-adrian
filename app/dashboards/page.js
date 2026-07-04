export const metadata = {
  title: 'Dashboards — Adrián Gallardo',
  description:
    'Dashboards y automatizaciones: Recursos Humanos, PowerQuery, Portal B2B y población mundial con esperanza de vida.'
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
          <h2 className="titulo-seccion">Dashboard Recursos Humanos</h2>
          <p className="subtitulo-seccion">
            Informe interactivo con la plantilla, sueldos, antigüedad y distribución geográfica de
            los empleados de una empresa.
          </p>
          <div className="imagen-destacada">
            <img src="/images/dash-rrhh.gif" alt="Dashboard de Recursos Humanos en movimiento" />
          </div>
        </div>
      </section>

      <section className="seccion gris">
        <div className="contenedor">
          <h2 className="titulo-seccion">Automatización y Limpieza de BBDD PowerQuery</h2>
          <p className="subtitulo-seccion">
            Limpieza y consolidación automática de bases de datos con Power Query.
          </p>
          <div className="video-marco">
            <iframe
              src="https://drive.google.com/file/d/191tr3By_naQpP0CrTuAMfer1nskScNGK/preview"
              title="Automatización y limpieza de bases de datos con PowerQuery"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">Portal B2B</h2>
          <p className="subtitulo-seccion">
            Demostración de un portal B2B con acceso de usuarios.
          </p>
          <div className="video-marco">
            <iframe
              src="https://drive.google.com/file/d/1AE_HKd4kRqvxsIgZzwOD5UvIfkm7we_b/preview"
              title="Demostración del Portal B2B"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="seccion gris">
        <div className="contenedor">
          <h2 className="titulo-seccion">Dashboard Población Mundial y Esperanza de Vida</h2>
          <p className="subtitulo-seccion">
            Análisis visual de la población por área y la esperanza de vida en el mundo.
          </p>
          <div className="video-marco">
            <iframe
              src="https://drive.google.com/file/d/13UbJpHYdaf96cLt4y46gXDB-iygGPvNp/preview"
              title="Dashboard de población mundial y esperanza de vida"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
