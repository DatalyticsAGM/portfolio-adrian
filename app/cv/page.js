export const metadata = {
  title: 'Currículum Vitae — Adrián Gallardo',
  description: 'Currículum vitae de Adrián Gallardo, Controller Financiero y Data Analyst. Disponible en español e inglés.'
};

export default function Cv() {
  return (
    <>
      <section className="hero hero-cielo">
        <h1>Currículum Vitae</h1>
        <div className="raya" />
      </section>

      <section className="seccion">
        <div className="contenedor" style={{ textAlign: 'center' }}>
          <h2 className="titulo-seccion">Adrián Gallardo — CV</h2>
          <p className="subtitulo-seccion">
            Consúltalo aquí mismo o descárgalo en el idioma que prefieras.
          </p>
          <div className="contacto-botones" style={{ marginBottom: '1rem' }}>
            <a href="/docs/cv-adrian-es.pdf" download className="boton grande">
              Descargar CV en Español
            </a>
            <a href="/docs/cv-adrian-en.pdf" download className="boton grande secundario" style={{ borderColor: 'var(--azul-oscuro)', color: 'var(--azul-oscuro)' }}>
              Download CV in English
            </a>
          </div>
          <div className="cv-visor">
            <iframe src="/docs/cv-adrian-es.pdf" title="Currículum vitae de Adrián Gallardo" />
          </div>
        </div>
      </section>
    </>
  );
}
