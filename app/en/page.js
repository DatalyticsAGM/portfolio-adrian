import Link from 'next/link';

export const metadata = {
  title: 'Adrián Gallardo — Financial Controller & Data Analyst',
  description:
    'Financial controller and data analyst based in Alicante, Spain: budget control, profitability analysis, executive reporting and Business Intelligence with Power BI, SQL, R and Python.'
};

const LINKEDIN_URL = 'https://www.linkedin.com/in/adriangallardomu%C3%B1oz/';

const experiencia = [
  {
    puesto: 'Financial Controller',
    empresa: 'Grupo Vectalia',
    fechas: 'Jan 2026 — May 2026 · Alicante · Maternity-leave cover',
    puntos: [
      'Group budget consolidation: validated budgets against historical data and closely monitored variances.',
      'Profitability analysis by business unit: financial ratios, operating margins and P&L insights.',
      'Reviewed economic-financial feasibility studies supporting public-tender bids.',
      'Executive reporting of financial KPIs to General Management for strategic decision-making.'
    ],
    herramientas: ['Power BI', 'SAP BI', 'ERP', 'Excel']
  },
  {
    puesto: 'Commercial & Industrial Controller',
    empresa: 'Vacavaliente EU',
    fechas: 'Jul 2025 — Dec 2025 · Elche',
    puntos: [
      'Automated administrative, commercial, logistics and financial processes.',
      'Led the internal rollout of the Odoo ERP: bulk data migrations and end-user training.',
      'Analysed business KPIs (sales, margins, promotions, ROI) and tracked budget-vs-actual variances.',
      'Supported budgeting, forecasting and monthly closing; evaluated commercial investments and campaigns.'
    ],
    herramientas: ['Odoo', 'Google Sheets', 'Excel', 'Power BI']
  },
  {
    puesto: 'Business Intelligence',
    empresa: 'Finetwork',
    fechas: 'May 2025 — Jun 2025 · Elda',
    puntos: [
      'Optimised SQL queries on PostgreSQL and structured data for reporting.',
      'Built and administered Metabase reports and dashboards: activity, quality and processes.',
      'Supported and trained business users on reporting tools.'
    ],
    herramientas: ['PostgreSQL', 'SQL', 'Metabase']
  },
  {
    puesto: 'Banking Back-Office Specialist',
    empresa: 'NTT Data',
    fechas: 'Dec 2023 — Nov 2024 · Alicante',
    puntos: [
      'Back office for Exchange-Traded Derivatives (ETDs): daily and monthly settlement, reconciliation and closing control in domestic and international markets.',
      'ETL processes with SQL and daily/weekly/monthly data exploitation with Power BI and pivot tables.',
      'Prepared financial reports and liaised with the client and business teams.'
    ],
    herramientas: ['SQL', 'Power BI', 'Excel']
  },
  {
    puesto: 'Sales Specialist',
    empresa: 'Leroy Merlin Spain',
    fechas: 'May 2022 — Sept 2022',
    puntos: [
      'Administrative and commercial management, sales analysis and stock-out detection — the experience that inspired my Bachelor’s thesis on data analysis for the company.'
    ],
    herramientas: ['Excel']
  }
];

const proyectos = [
  {
    titulo: 'CTSA Field OS — Food-safety app',
    descripcion:
      'Real client application for CTSA Alimentaria (client project, JAKS brand): digitalises HACCP inspections, sampling, chlorine control and REVET with digital signature, automatic PDF and email delivery.',
    etiquetas: ['Next.js', 'Supabase', 'n8n', 'AI'],
    imagen: '/images/ctsa-login.png',
    href: '/en/ctsa-field-os/'
  },
  {
    titulo: 'Master’s Thesis — End-to-End BI System for Altadis',
    descripcion:
      'From data to decision: ETL in R, PostgreSQL Data Warehouse (star schema) and executive Power BI dashboards with clustering and predictive models.',
    etiquetas: ['R', 'PostgreSQL', 'Power BI', 'Machine Learning'],
    imagen: '/images/logo-imperial-altadis.jpg',
    href: '/en/tfm-altadis/'
  },
  {
    titulo: 'Bachelor’s Thesis — Leroy Merlin',
    descripcion:
      'Sales and product-review analysis with R: logistic regression and text mining to reduce negative reviews versus the competition. Grade: 8/10.',
    etiquetas: ['R', 'Excel', 'Statistics'],
    imagen: '/images/card-leroy.png',
    href: '/en/tfg-leroy-merlin/'
  },
  {
    titulo: 'AVdental Clinic — Customer segmentation',
    descripcion:
      'Identified the target audience for marketing campaigns: women interested in aesthetic treatments during autumn and winter.',
    etiquetas: ['R', 'Power BI', 'Excel'],
    imagen: '/images/card-avdental.png',
    href: '/en/clinica-avdental/'
  },
  {
    titulo: 'Dashboards & automations',
    descripcion:
      'HR dashboard, database automation with Power Query, a B2B portal and a world population & life expectancy analysis.',
    etiquetas: ['Power BI', 'Power Query'],
    imagen: '/images/dash-rrhh.gif',
    href: '/en/dashboards/',
    cubrir: true
  },
  {
    titulo: 'Racks Connect — Startup-investor matchmaking',
    descripcion:
      '"Tinder for founders and investors" web app built at Racks House (Madrid): project scoring, real-interest signals and filters by sector, stage and ticket.',
    etiquetas: ['Business Intelligence', 'Product'],
    imagen: '/images/logos-tecnologias.png',
    href: 'https://racksconnect.lovable.app',
    externo: true
  },
  {
    titulo: 'AV Dental Clinic website',
    descripcion:
      'Design and development of the clinic’s real website: responsive, WhatsApp and Google Maps integration, SEO and GDPR compliance.',
    etiquetas: ['Web development', 'SEO'],
    imagen: '/images/avd-fachada.jpg',
    href: 'https://avgrupoelcampello.com',
    externo: true,
    cubrir: true
  },
  {
    titulo: 'AJ Protect Iberia website',
    descripcion:
      'B2B corporate landing page for AJ Protect Iberia, an electrical services company with projects in Spain and the UK: modern design focused on client acquisition.',
    etiquetas: ['Web development', 'B2B'],
    imagen: '/images/logo-ajprotect.jpg',
    href: 'https://ajprotect.com',
    externo: true
  },
  {
    titulo: 'JAKS — Automation for SMEs',
    descripcion:
      'My automation and digital solutions brand: AI chatbots on WhatsApp, automated workflows, integrations and dashboards so businesses can scale without extra working hours.',
    etiquetas: ['Automation', 'AI', 'n8n'],
    imagen: '/images/logo-jaks.png',
    href: 'https://jaks.es',
    externo: true
  }
];

export default function Home() {
  return (
    <>
      <section className="hero-perfil">
        <div className="hero-perfil-inner">
          <div className="hero-texto">
            <p className="hero-saludo">Hi, I’m</p>
            <h1>Adrián Gallardo</h1>
            <h2>
              Financial Controller <span className="amp">&amp;</span> Data Analyst
            </h2>
            <p className="hero-frase">
              I turn data into business decisions: budget control, executive reporting and
              Business Intelligence with Power BI, SQL and R.
            </p>
            <p className="hero-ubicacion">📍 Alicante, Spain · Open to new opportunities</p>
            <div className="hero-botones">
              <a href="#proyectos" className="boton grande">View projects</a>
              <a href="/docs/cv-adrian-en.pdf" download className="boton grande secundario">
                Download CV
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
          <h2 className="titulo-seccion">One profile, two specialities</h2>
          <p className="subtitulo-seccion">
            An unusual combination: the financial rigour of a controller and the technical
            toolkit of a data analyst.
          </p>
          <div className="pilares">
            <div className="pilar">
              <div className="pilar-icono">🧮</div>
              <h3>Financial Controlling</h3>
              <ul>
                <li>Budget consolidation and control; variance tracking</li>
                <li>Profitability analysis: ratios, margins and P&amp;L by business unit</li>
                <li>Economic feasibility studies for tenders and projects</li>
                <li>Executive KPI reporting to General Management</li>
                <li>Forecasting, monthly closing and audit support</li>
              </ul>
              <div className="badges">
                <span>Excel</span><span>SAP BI</span><span>Odoo ERP</span><span>Power BI</span>
              </div>
            </div>
            <div className="pilar">
              <div className="pilar-icono">📊</div>
              <h3>Data Analytics &amp; BI</h3>
              <ul>
                <li>Interactive dashboards and data storytelling</li>
                <li>ETL and modelling: Data Warehouse, optimised SQL queries</li>
                <li>Statistical analysis and Machine Learning (clustering, predictive models)</li>
                <li>Process and data-flow automation (Power Query, n8n)</li>
                <li>AI-powered web development: Next.js, Supabase and assistants like Claude</li>
                <li>Reporting platform administration and user training</li>
              </ul>
              <div className="badges">
                <span>Power BI</span><span>SQL</span><span>PostgreSQL</span><span>R</span>
                <span>Python</span><span>Metabase</span><span>n8n</span><span>AI (Claude)</span>
                <span>Next.js</span><span>Supabase</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion gris" id="experiencia">
        <div className="contenedor">
          <h2 className="titulo-seccion">Experience</h2>
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
          <h2 className="titulo-seccion">Projects</h2>
          <p className="subtitulo-seccion">
            Real cases told the way they should be: a business problem, an analysis and a result.
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
                      View project ↗
                    </a>
                  ) : (
                    <Link href={p.href} className="boton">View project</Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion gris" id="formacion">
        <div className="contenedor">
          <h2 className="titulo-seccion">Education</h2>
          <div className="formacion-grid">
            <div className="formacion-item">
              <h3>Master’s Degree in Business Intelligence</h3>
              <p>UNIR · 2024 — 2025 · Official degree</p>
              <p className="formacion-detalle">
                Thesis: "From Data to Decision — an End-to-End BI System for Altadis".
              </p>
            </div>
            <div className="formacion-item">
              <h3>Advanced University Course: Data Analyst with Power BI</h3>
              <p>UNIR · 2025</p>
            </div>
            <div className="formacion-item">
              <h3>Bachelor’s Degree in Business Administration and Management</h3>
              <p>University of Alicante</p>
              <p className="formacion-detalle">
                Thesis: sales and review analysis for Leroy Merlin with R (grade: 8/10).
              </p>
            </div>
            <div className="formacion-item">
              <h3>English B1 (Cambridge)</h3>
              <p>Currently preparing B2</p>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion" id="sobre-mi">
        <div className="contenedor">
          <h2 className="titulo-seccion">About Me</h2>
          <div className="sobre-mi">
            <div className="foto">
              <img src="/images/foto-adrian.png" alt="Adrián Gallardo" />
            </div>
            <div className="texto">
              <p>
                <strong>♟ Passionate about data and strategy.</strong>
              </p>
              <p>
                My career bridges two worlds: <strong>financial management</strong> (budgets,
                profitability, reporting) and <strong>data analytics</strong> (BI, ETL, Machine
                Learning). That dual perspective means I don’t just build the dashboard — I
                understand what it means for the P&amp;L.
              </p>
              <p>
                I’m an <strong>Arena FIDE Master (AFM)</strong> of the International Chess
                Federation. Chess taught me to think in a structured way, anticipate scenarios and
                decide based on patterns — exactly what I apply to data every day.
              </p>
              <p>
                I’m always learning: automation with n8n, improving my English towards B2, and
                anything that makes a process more efficient than it was yesterday.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion contacto" id="contacto">
        <div className="contenedor">
          <h2 className="titulo-seccion claro">Let’s talk</h2>
          <p className="contacto-frase">
            If you’re looking for someone who combines financial strategy, analytics and
            data-driven decision-making, get in touch.
          </p>
          <div className="contacto-botones">
            <a href="mailto:adriangallardogm@gmail.com" className="boton grande">
              ✉ adriangallardogm@gmail.com
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="boton grande secundario">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
