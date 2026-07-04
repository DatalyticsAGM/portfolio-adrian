const CV_URL = 'https://drive.google.com/file/d/1I7ItXnAjj808H3tF4zXLUz8hAfddHyax';

export const metadata = {
  title: 'Currículum Vitae — Adrián Gallardo',
  description: 'Currículum vitae de Adrián Gallardo, Data Analyst.'
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
            Puedes consultarlo aquí mismo o descargarlo en PDF.
          </p>
          <a
            href={`${CV_URL}/view?usp=drive_link`}
            target="_blank"
            rel="noopener noreferrer"
            className="boton grande"
          >
            Click aquí para descargar CV
          </a>
          <div className="cv-visor">
            <iframe src={`${CV_URL}/preview`} title="Currículum vitae de Adrián Gallardo" />
          </div>
        </div>
      </section>
    </>
  );
}
