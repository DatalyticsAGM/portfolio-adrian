export const metadata = {
  title: 'CTSA Field OS — Food-safety app | Adrián Gallardo',
  description:
    'Professional web application for CTSA Alimentaria: digitalises HACCP inspections, microbiological sampling, chlorine control and REVET with digital signature, automatic PDF and email delivery. Next.js, Supabase and n8n.'
};

export default function CtsaFieldOs() {
  return (
    <>
      <section className="hero hero-cielo">
        <h1>CTSA Field OS</h1>
        <p className="subtitulo">Real client project · JAKS</p>
        <div className="raya" />
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">Goals and Approach</h2>
          <p className="subtitulo-seccion">
            Professional web application (PWA) built for <strong>CTSA Alimentaria</strong> (Food
            Safety Technology Centre, Alicante, Spain) under my automation brand{' '}
            <a href="https://jaks.es" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
              JAKS
            </a>.
          </p>
          <div className="etapas">
            <div className="etapa">
              <div className="imagen"><div style={{ fontSize: '3.5rem' }}>🎯</div></div>
              <h3>Goal</h3>
              <p>
                Remove paper from field work: digitalise HACCP inspections, microbiological
                sampling, chlorine control and temperature verification (REVET) for the company’s
                technicians.
              </p>
            </div>
            <div className="etapa">
              <div className="imagen"><div style={{ fontSize: '3.5rem' }}>⚙️</div></div>
              <h3>Solution</h3>
              <p>
                The technician enters the data once on a tablet; the system reviews it, signs
                digitally, generates the PDF, emails it to the client and archives it. No paper,
                no repetition, no lost information.
              </p>
            </div>
            <div className="etapa">
              <div className="imagen">
                <img src="/images/ctsa-login.png" alt="CTSA Field OS login screen" className="contener" />
              </div>
              <h3>Technologies</h3>
              <p>
                Next.js 14 + TypeScript, Supabase (PostgreSQL, Auth, Storage and RLS security),
                automation with n8n and AI-assisted development (Claude and Bolt).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion gris">
        <div className="contenedor">
          <h2 className="titulo-seccion">The App in Action</h2>
          <p className="subtitulo-seccion">
            Two video walkthroughs of the real application: the technician’s daily route, the
            inspection modules, digital signature and automatic document delivery.
          </p>
          <div className="video-marco">
            <video controls preload="metadata" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <source src="/videos/ctsa-demo-1.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>
          <div className="video-marco">
            <video controls preload="metadata" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <source src="/videos/ctsa-demo-2.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">What the System Does</h2>
          <div className="pilares">
            <div className="pilar">
              <div className="pilar-icono">🧑‍🔬</div>
              <h3>For the field technician</h3>
              <ul>
                <li>Sees only the visits assigned for the day, with the relevant modules (HACCP, sampling, chlorine, REVET)</li>
                <li>Drafts auto-saved every 30 seconds: a 3-4 hour inspection is never lost, even offline</li>
                <li>Mandatory double on-screen signature (technician + client) before closing</li>
                <li>Reusable sampling-surface catalogue across visits</li>
              </ul>
            </div>
            <div className="pilar">
              <div className="pilar-icono">🏢</div>
              <h3>For the office and the client</h3>
              <ul>
                <li>Operations panel: visit creation, technician assignment and tracking</li>
                <li>PDF generated and emailed automatically after each inspection (n8n workflows)</li>
                <li>Searchable document archive, with each client seeing only their own data (row-level security)</li>
                <li>Regulatory calculations (chlorine compliance, REVET averages) done in the database, not by hand</li>
              </ul>
            </div>
          </div>
          <div className="badges centrado" style={{ marginTop: '2.5rem', justifyContent: 'center' }}>
            <span>Next.js 14</span><span>TypeScript</span><span>Supabase</span><span>PostgreSQL</span>
            <span>Auth + RLS</span><span>n8n</span><span>Tailwind CSS</span><span>AI (Claude)</span><span>PWA</span>
          </div>
          <p className="nota" style={{ marginTop: '2rem' }}>
            A project in production for a real client. Need something similar for your business?{' '}
            <a href="https://jaks.es" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
              Visit jaks.es
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
