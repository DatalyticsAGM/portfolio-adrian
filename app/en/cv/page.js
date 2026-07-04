export const metadata = {
  title: 'Curriculum Vitae — Adrián Gallardo',
  description: 'CV of Adrián Gallardo, Financial Controller and Data Analyst. Available in English and Spanish.'
};

export default function Cv() {
  return (
    <>
      <section className="hero hero-cielo">
        <h1>Curriculum Vitae</h1>
        <div className="raya" />
      </section>

      <section className="seccion">
        <div className="contenedor" style={{ textAlign: 'center' }}>
          <h2 className="titulo-seccion">Adrián Gallardo — CV</h2>
          <p className="subtitulo-seccion">
            Read it right here or download it in the language you prefer.
          </p>
          <div className="contacto-botones" style={{ marginBottom: '1rem' }}>
            <a href="/docs/cv-adrian-en.pdf" download className="boton grande">
              Download CV in English
            </a>
            <a href="/docs/cv-adrian-es.pdf" download className="boton grande secundario" style={{ borderColor: 'var(--azul-oscuro)', color: 'var(--azul-oscuro)' }}>
              Descargar CV en Español
            </a>
          </div>
          <div className="cv-visor">
            <iframe src="/docs/cv-adrian-en.pdf" title="Curriculum vitae of Adrián Gallardo" />
          </div>
        </div>
      </section>
    </>
  );
}
