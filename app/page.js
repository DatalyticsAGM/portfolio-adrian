import Link from 'next/link';

const CV_URL = 'https://drive.google.com/file/d/1I7ItXnAjj808H3tF4zXLUz8hAfddHyax/view?usp=drive_link';
const LINKEDIN_URL = 'https://www.linkedin.com/in/adriangallardomu%C3%B1oz/';

const experiencia = [
  {
    puesto: 'Controller Financiero',
    empresa: 'Grupo Vectalia',
    fechas: 'Ene. 2026 — May. 2026 · Alicante · Cobertura de baja por maternidad',
    puntos: [
      'Consolidación y control presupuestario del grupo: validación de presupuestos frente a históricos y seguimiento estricto de desviaciones.',
      'Análisis de rentabilidad por unidad de negocio: ratios financieros, márgenes operativos y cuenta de resultados.',
      'Supervisión de estudios económico-financieros para licitaciones, contrastando la viabilidad de cada propuesta.',
      'Reporting ejecutivo de KPIs financieros a Dirección General para la toma de decisiones estratégicas.'
    ],
    herramientas: ['Power BI', 'SAP BI', 'ERP', 'Excel']
  },
  {
    puesto: 'Controller Comercial / Industrial',
    empresa: 'Vacavaliente EU',
    fechas: 'Jul. 2025 — Dic. 2025 · Elche',
    puntos: [
      'Automatización de procesos administrativos, comerciales, logísticos y financieros.',
      'Implantación del ERP Odoo: cargas masivas de datos y formación a los empleados.',
      'Análisis de KPIs de negocio (ventas, márgenes, promociones, ROI) y seguimiento de desviaciones presupuesto vs. real.',
      'Apoyo en presupuesto, forecast y cierre mensual; evaluación de inversiones comerciales y campañas.'
    ],
    herramientas: ['Odoo', 'Google Sheets', 'Excel', 'Power BI']
  },
  {
    puesto: 'Business Intelligence',
    empresa: 'Finetwork',
    fechas: 'May. 2025 — Jun. 2025 · Elda',
    puntos: [
      'Optimización de consultas SQL sobre PostgreSQL y estructuración de datos para reporting.',
      'Creación y administración de reportes y dashboards en Metabase: actividad, calidad y procesos.',
      'Soporte y formación a usuarios de negocio en herramientas de reporting.'
    ],
    herramientas: ['PostgreSQL', 'SQL', 'Metabase']
  },
  {
    puesto: 'Técnico Back Office — Sector Bancario',
    empresa: 'NTT Data',
    fechas: 'Dic. 2023 — Nov. 2024 · Alicante',
    puntos: [
      'Back office de Derivados Listados (ETDs): liquidación diaria y mensual, conciliación y control de cierre de operaciones en mercados nacionales e internacionales.',
      'Procesos ETL mediante SQL y explotación diaria/semanal/mensual del dato con Power BI y tablas dinámicas.',
      'Preparación de informes financieros e interlocución con cliente y áreas de negocio.'
    ],
    herramientas: ['SQL', 'Power BI', 'Excel']
  },
  {
    puesto: 'Especialista en Ventas',
    empresa: 'Leroy Merlin España',
    fechas: 'May. 2022 — Sept. 2022',
    puntos: [
      'Gestión administrativa y comercial, análisis de ventas y detección de roturas de stock — experiencia que inspiró mi TFG de análisis de datos sobre la compañía.'
    ],
    herramientas: ['Excel']
  }
];

const proyectos = [
  {
    titulo: 'TFM — Sistema Integral de BI para Altadis',
    descripcion:
      'Del dato a la decisión: ETL en R, Data Warehouse en PostgreSQL (modelo en estrella) y dashboards ejecutivos en Power BI con clustering y modelos predictivos.',
    etiquetas: ['R', 'PostgreSQL', 'Power BI', 'Machine Learning'],
    imagen: '/images/logo-imperial-altadis.jpg',
    href: '/tfm-altadis/'
  },
  {
    titulo: 'TFG — Leroy Merlin',
    descripcion:
      'Análisis de ventas y valoraciones con R: regresión logística y análisis de texto para reducir las críticas negativas frente a la competencia. Nota: 8.',
    etiquetas: ['R', 'Excel', 'Estadística'],
    imagen: '/images/card-leroy.png',
    href: '/tfg-leroy-merlin/'
  },
  {
    titulo: 'Clínica AVdental — Segmentación de clientes',
    descripcion:
      'Identificación del público objetivo para campañas de marketing: mujeres interesadas en servicios estéticos en otoño-invierno.',
    etiquetas: ['R', 'Power BI', 'Excel'],
    imagen: '/images/card-avdental.png',
    href: '/clinica-avdental/'
  },
  {
    titulo: 'Dashboards y automatizaciones',
    descripcion:
      'Dashboard de RRHH, automatización de bases de datos con Power Query, portal B2B y análisis de población mundial.',
    etiquetas: ['Power BI', 'Power Query'],
    imagen: '/images/dash-rrhh.gif',
    href: '/dashboards/',
    cubrir: true
  },
  {
    titulo: 'Racks Connect — Matchmaking startups-inversores',
    descripcion:
      'Web app tipo "Tinder para emprendedores e inversores" creada en Racks House (Madrid): scoring de proyectos, señales de interés real y filtros por sector, etapa y ticket.',
    etiquetas: ['Business Intelligence', 'Producto'],
    imagen: '/images/logos-tecnologias.png',
    href: 'https://racksconnect.lovable.app',
    externo: true
  },
  {
    titulo: 'Web Clínica AV Dental',
    descripcion:
      'Diseño y desarrollo de la web real de la clínica: responsive, integración con WhatsApp y Google Maps, SEO y cumplimiento RGPD.',
    etiquetas: ['Desarrollo web', 'SEO'],
    imagen: '/images/avd-fachada.jpg',
    href: 'https://avgrupoelcampello.com',
    externo: true,
    cubrir: true
  }
];

export default function Inicio() {
  return (
    <>
      <section className="hero-perfil">
        <div className="hero-perfil-inner">
          <div className="hero-texto">
            <p className="hero-saludo">Hola, soy</p>
            <h1>Adrián Gallardo</h1>
            <h2>
              Controller Financiero <span className="amp">&amp;</span> Data Analyst
            </h2>
            <p className="hero-frase">
              Convierto los datos en decisiones de negocio: control presupuestario, reporting a
              dirección y Business Intelligence con Power BI, SQL y R.
            </p>
            <p className="hero-ubicacion">📍 Alicante, España · Disponible para nuevos retos</p>
            <div className="hero-botones">
              <a href="#proyectos" className="boton grande">Ver proyectos</a>
              <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="boton grande secundario">
                Descargar CV
              </a>
            </div>
          </div>
          <div className="hero-foto">
            <img src="/images/foto-adrian.png" alt="Adrián Gallardo Muñoz" />
          </div>
        </div>
      </section>

      <section className="seccion" id="perfiles">
        <div className="contenedor">
          <h2 className="titulo-seccion">Un perfil, dos especialidades</h2>
          <p className="subtitulo-seccion">
            La combinación poco habitual que aporto: el rigor financiero de un controller y las
            herramientas técnicas de un analista de datos.
          </p>
          <div className="pilares">
            <div className="pilar">
              <div className="pilar-icono">🧮</div>
              <h3>Controlling Financiero</h3>
              <ul>
                <li>Consolidación y control presupuestario; seguimiento de desviaciones</li>
                <li>Análisis de rentabilidad: ratios, márgenes y cuenta de resultados por unidad de negocio</li>
                <li>Estudios de viabilidad económica de licitaciones y proyectos</li>
                <li>Reporting ejecutivo de KPIs a Dirección General</li>
                <li>Forecast, cierre mensual y apoyo a auditorías</li>
              </ul>
              <div className="badges">
                <span>Excel</span><span>SAP BI</span><span>Odoo ERP</span><span>Power BI</span>
              </div>
            </div>
            <div className="pilar">
              <div className="pilar-icono">📊</div>
              <h3>Data Analytics &amp; BI</h3>
              <ul>
                <li>Dashboards interactivos y storytelling con datos</li>
                <li>ETL y modelado: Data Warehouse, consultas SQL optimizadas</li>
                <li>Análisis estadístico y Machine Learning (clustering, modelos predictivos)</li>
                <li>Automatización de procesos y flujos de datos (Power Query, n8n)</li>
                <li>Administración de plataformas de reporting y formación a usuarios</li>
              </ul>
              <div className="badges">
                <span>Power BI</span><span>SQL</span><span>PostgreSQL</span><span>R</span>
                <span>Python</span><span>Metabase</span><span>n8n</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion gris" id="experiencia">
        <div className="contenedor">
          <h2 className="titulo-seccion">Experiencia</h2>
          <div className="timeline">
            {experiencia.map((e) => (
              <div className="timeline-item" key={e.empresa + e.fechas}>
                <div className="timeline-punto" />
                <div className="timeline-contenido">
                  <h3>{e.puesto}</h3>
                  <p className="timeline-empresa">{e.empresa} · <span>{e.fechas}</span></p>
                  <ul>
                    {e.puntos.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <div className="badges">
                    {e.herramientas.map((h) => (
                      <span key={h}>{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion" id="proyectos">
        <div className="contenedor">
          <h2 className="titulo-seccion">Proyectos</h2>
          <p className="subtitulo-seccion">
            Casos reales contados como lo que son: un problema de negocio, un análisis y un
            resultado.
          </p>
          <div className="grid-tarjetas proyectos">
            {proyectos.map((p) => (
              <article className="tarjeta" key={p.titulo}>
                <div className="imagen">
                  <img src={p.imagen} alt={p.titulo} className={p.cubrir ? 'cubrir' : ''} />
                </div>
                <div className="cuerpo">
                  <h3>{p.titulo}</h3>
                  <p className="tarjeta-descripcion">{p.descripcion}</p>
                  <div className="badges centrado">
                    {p.etiquetas.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  {p.externo ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="boton">
                      Ver proyecto ↗
                    </a>
                  ) : (
                    <Link href={p.href} className="boton">Ver proyecto</Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion gris" id="formacion">
        <div className="contenedor">
          <h2 className="titulo-seccion">Formación</h2>
          <div className="formacion-grid">
            <div className="formacion-item">
              <h3>Máster Universitario en Inteligencia de Negocio</h3>
              <p>UNIR · 2024 — 2025 · Título oficial</p>
              <p className="formacion-detalle">
                TFM: "Desde el Dato hasta la Decisión — Sistema Integral de BI para Altadis".
              </p>
            </div>
            <div className="formacion-item">
              <h3>Curso Universitario Avanzado en Data Analyst con Power BI</h3>
              <p>UNIR · 2025</p>
            </div>
            <div className="formacion-item">
              <h3>Grado en Administración y Dirección de Empresas</h3>
              <p>Universidad de Alicante</p>
              <p className="formacion-detalle">
                TFG: análisis de ventas y valoraciones de Leroy Merlin con R (nota: 8).
              </p>
            </div>
            <div className="formacion-item">
              <h3>Inglés B1 (Cambridge)</h3>
              <p>Actualmente preparando el B2</p>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion" id="sobre-mi">
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
                Mi carrera une dos mundos: la <strong>dirección financiera</strong> (presupuestos,
                rentabilidad, reporting) y el <strong>análisis de datos</strong> (BI, ETL, Machine
                Learning). Esa doble visión me permite no solo construir el dashboard, sino
                entender qué significa para la cuenta de resultados.
              </p>
              <p>
                Soy <strong>Maestro de Ajedrez Arena (AFM)</strong> por la Federación Internacional
                de Ajedrez (FIDE). El ajedrez me enseñó a pensar de manera estructurada, anticipar
                escenarios y decidir con base en patrones — exactamente lo que aplico cada día con
                los datos.
              </p>
              <p>
                Estoy en aprendizaje constante: automatización con n8n, mejora de mi inglés hacia
                el B2 y todo lo que haga que un proceso sea más eficiente que ayer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion contacto" id="contacto">
        <div className="contenedor">
          <h2 className="titulo-seccion claro">¿Hablamos?</h2>
          <p className="contacto-frase">
            Si buscas a alguien que combine estrategia financiera, análisis y toma de decisiones
            basadas en datos, escríbeme.
          </p>
          <div className="contacto-botones">
            <a href="mailto:adriangallardogm@gmail.com" className="boton grande">
              ✉ adriangallardogm@gmail.com
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="boton grande secundario">
              Conectar en LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
