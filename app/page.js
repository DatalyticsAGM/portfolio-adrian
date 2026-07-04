import Link from 'next/link';

const CV_URL = 'https://drive.google.com/file/d/1I7ItXnAjj808H3tF4zXLUz8hAfddHyax/view?usp=drive_link';

const proyectos = [
  {
    titulo: 'Currículum Vitae',
    imagen: '/images/card-cv.jpg',
    href: '/cv/',
    externo: false
  },
  {
    titulo: 'TFG Leroy Merlin',
    imagen: '/images/card-leroy.png',
    href: '/tfg-leroy-merlin/',
    externo: false
  },
  {
    titulo: 'Clínica AVdental',
    imagen: '/images/card-avdental.png',
    href: '/clinica-avdental/',
    externo: false
  },
  {
    titulo: 'Dashboards',
    imagen: '/images/card-dashboards.jpg',
    href: '/dashboards/',
    externo: false,
    cubrir: true
  }
];

const competencias = [
  {
    titulo: 'Análisis y Visualización',
    texto:
      'Diseño de dashboards interactivos en Power BI, Tableau y Excel, permitiendo una mejor interpretación de los datos. Uso de storytelling para comunicar insights clave de manera efectiva.'
  },
  {
    titulo: 'Limpieza y Procesamiento',
    texto:
      'Extracción, transformación y carga de datos (ETL) con SQL y Python. Eliminación de datos inconsistentes, normalización y optimización para mejorar la calidad y confiabilidad de la información.'
  },
  {
    titulo: 'Modelos Predictivos',
    texto:
      'Aplicación de Machine Learning y análisis estadístico para prever tendencias, segmentar clientes y optimizar procesos.'
  },
  {
    titulo: 'Consultoría en BI',
    texto:
      'Implementación y optimización de sistemas de Inteligencia de Negocio. Diseño de arquitecturas de datos escalables y asesoramiento en estrategias basadas en datos para mejorar la eficiencia empresarial.'
  },
  {
    titulo: 'Capacitación y Mentoría',
    texto: 'Formación en herramientas clave como Python, SQL, Power BI y Excel.'
  }
];

export default function Inicio() {
  return (
    <>
      <section className="hero hero-cielo">
        <h1>Adrián Gallardo</h1>
        <p className="subtitulo">Data Analyst</p>
        <div className="raya" />
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">Portafolio</h2>
          <div className="grid-tarjetas">
            {proyectos.map((p) => (
              <article className="tarjeta" key={p.titulo}>
                <div className="imagen">
                  <img src={p.imagen} alt={p.titulo} className={p.cubrir ? 'cubrir' : ''} />
                </div>
                <div className="cuerpo">
                  <h3>{p.titulo}</h3>
                  <Link href={p.href} className="boton">
                    Ver más
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion gris">
        <div className="contenedor">
          <h2 className="titulo-seccion">Competencias y Servicios</h2>
          <div className="competencias">
            <div className="logos">
              <img src="/images/logos-tecnologias.png" alt="Python, R, Power BI, SQL y Excel" />
            </div>
            <div className="lista-competencias">
              {competencias.map((c) => (
                <div key={c.titulo}>
                  <h3>{c.titulo}</h3>
                  <p>{c.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">Sobre Mí</h2>
          <div className="sobre-mi">
            <div className="foto">
              <img src="/images/foto-adrian.png" alt="Adrián Gallardo" />
            </div>
            <div className="texto">
              <p>
                <strong>♟ Apasionado por los datos y la estrategia.</strong>
              </p>
              <p>
                Soy <strong>Adrián</strong>, graduado en{' '}
                <strong>Administración y Dirección de Empresas</strong> por la{' '}
                <strong>Universidad de Alicante</strong> y actualmente cursando un{' '}
                <strong>Máster en Inteligencia de Negocio y Data Analytics</strong> en la UNIR.
              </p>
              <p>
                Mi pasión por el ajedrez me ha enseñado a pensar de manera estructurada, anticipar
                escenarios y tomar decisiones basadas en patrones. En el mundo del análisis de
                datos aplico esa misma mentalidad: transformar datos en estrategias que generen
                impacto real.
              </p>
              <p>
                Además de mi formación en <strong>Business Intelligence y Data Analytics</strong>,
                soy <strong>Maestro de Ajedrez Arena (AFM) por la Federación Internacional de
                Ajedrez (FIDE)</strong>. Estoy en constante aprendizaje, buscando siempre optimizar
                procesos, descubrir insights valiosos y aportar soluciones basadas en datos.
              </p>
              <p>
                ♟ Si buscas a alguien que combine estrategia, análisis y toma de decisiones basadas
                en datos, no dudes en hablar conmigo.
              </p>
              <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="boton">
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
