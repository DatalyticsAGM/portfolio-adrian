export const metadata = {
  title: 'CTSA Field OS — App de seguridad alimentaria | Adrián Gallardo',
  description:
    'Aplicación web profesional para CTSA Alimentaria: digitalización de APPCC, muestras microbiológicas, control de cloro y REVET con firma digital, PDF automático y envío por email. Next.js, Supabase y n8n.'
};

export default function CtsaFieldOs() {
  return (
    <>
      <section className="hero hero-cielo">
        <h1>CTSA Field OS</h1>
        <p className="subtitulo">Proyecto real de cliente · JAKS</p>
        <div className="raya" />
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">Etapas y Objetivos</h2>
          <p className="subtitulo-seccion">
            Aplicación web profesional (PWA) desarrollada para{' '}
            <strong>CTSA Alimentaria</strong> (Centro Tecnológico de Seguridad Alimentaria,
            Alicante) bajo mi marca de automatización{' '}
            <a href="https://jaks.es" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
              JAKS
            </a>.
          </p>
          <div className="etapas">
            <div className="etapa">
              <div className="imagen"><div style={{ fontSize: '3.5rem' }}>🎯</div></div>
              <h3>Objetivo</h3>
              <p>
                Eliminar el papel del trabajo de campo: digitalizar las inspecciones APPCC, las
                muestras microbiológicas, el control de cloro y la verificación de temperaturas
                (REVET) de los técnicos de la empresa.
              </p>
            </div>
            <div className="etapa">
              <div className="imagen"><div style={{ fontSize: '3.5rem' }}>⚙️</div></div>
              <h3>Solución</h3>
              <p>
                El técnico introduce los datos una sola vez en su tablet; el sistema revisa, firma
                digitalmente, genera el PDF, lo envía por email al cliente y lo archiva. Sin papel,
                sin repetición, sin pérdida de información.
              </p>
            </div>
            <div className="etapa">
              <div className="imagen">
                <img src="/images/ctsa-login.png" alt="Pantalla de acceso de CTSA Field OS" className="contener" />
              </div>
              <h3>Tecnologías</h3>
              <p>
                Next.js 14 + TypeScript, Supabase (PostgreSQL, Auth, Storage y seguridad RLS),
                automatización con n8n y desarrollo asistido por IA (Claude y Bolt).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion gris">
        <div className="contenedor">
          <h2 className="titulo-seccion">La App en Acción</h2>
          <p className="subtitulo-seccion">
            Dos recorridos en vídeo por la aplicación real: la ruta diaria del técnico, los
            módulos de inspección, la firma digital y el envío automático de documentos.
          </p>
          <div className="video-marco">
            <video controls preload="metadata" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <source src="/videos/ctsa-demo-1.mp4" type="video/mp4" />
              Tu navegador no soporta vídeo HTML5.
            </video>
          </div>
          <div className="video-marco">
            <video controls preload="metadata" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <source src="/videos/ctsa-demo-2.mp4" type="video/mp4" />
              Tu navegador no soporta vídeo HTML5.
            </video>
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">Qué hace el sistema</h2>
          <div className="pilares">
            <div className="pilar">
              <div className="pilar-icono">🧑‍🔬</div>
              <h3>Para el técnico de campo</h3>
              <ul>
                <li>Ve solo sus visitas asignadas del día, con los módulos que tocan (APPCC, muestras, cloro, REVET)</li>
                <li>Borradores con autoguardado cada 30 segundos: una inspección de 3-4 horas nunca se pierde, ni sin conexión</li>
                <li>Firma digital doble en pantalla (técnico + cliente) obligatoria antes de cerrar</li>
                <li>Catálogo de superficies de muestreo reutilizable entre visitas</li>
              </ul>
            </div>
            <div className="pilar">
              <div className="pilar-icono">🏢</div>
              <h3>Para la oficina y el cliente</h3>
              <ul>
                <li>Panel operativo: creación de visitas, asignación de técnicos y seguimiento</li>
                <li>PDF generado y enviado por email automáticamente al terminar cada inspección (flujos n8n)</li>
                <li>Archivo documental consultable, con cada cliente viendo solo lo suyo (seguridad a nivel de fila en la base de datos)</li>
                <li>Cálculos normativos (conformidad de cloro, medias REVET) hechos en la base de datos, no a mano</li>
              </ul>
            </div>
          </div>
          <div className="badges centrado" style={{ marginTop: '2.5rem', justifyContent: 'center' }}>
            <span>Next.js 14</span><span>TypeScript</span><span>Supabase</span><span>PostgreSQL</span>
            <span>Auth + RLS</span><span>n8n</span><span>Tailwind CSS</span><span>IA (Claude)</span><span>PWA</span>
          </div>
          <p className="nota" style={{ marginTop: '2rem' }}>
            Proyecto en producción para un cliente real. ¿Necesitas algo parecido para tu negocio?{' '}
            <a href="https://jaks.es" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
              Visita jaks.es
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
