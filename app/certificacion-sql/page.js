export const metadata = {
  title: 'Certificación SQL — Adrián Gallardo',
  description:
    'Certificación SQL (Udemy) y ejercicios resueltos sobre la base de datos NetflixDB: consultas con JOIN, agregaciones y subconsultas.'
};

const tablas = [
  {
    nombre: 'Actores',
    columnas: [
      ['actor_id', 'int', 'PK'],
      ['nombre', 'text', ''],
      ['fecha_nacimiento', 'date', '']
    ]
  },
  {
    nombre: 'Series',
    columnas: [
      ['serie_id', 'int', 'PK'],
      ['titulo', 'text', ''],
      ['descripcion', 'text', ''],
      ['año_lanzamiento', 'int', ''],
      ['genero', 'text', '']
    ]
  },
  {
    nombre: 'Episodios',
    columnas: [
      ['episodio_id', 'int', 'PK'],
      ['serie_id', 'int', 'FK'],
      ['titulo', 'text', ''],
      ['duracion', 'int', ''],
      ['rating_imdb', 'int', ''],
      ['temporada', 'int', ''],
      ['descripcion', 'text', ''],
      ['fecha_estreno', 'date', '']
    ]
  },
  {
    nombre: 'Actuaciones',
    columnas: [
      ['actor_id', 'int', 'PK · FK'],
      ['serie_id', 'int', 'PK · FK'],
      ['personaje', 'text', '']
    ]
  }
];

// Coloreado de sintaxis SQL sencillo y seguro
const KEYWORDS = [
  'SELECT', 'FROM', 'JOIN', 'INNER JOIN', 'LEFT JOIN', 'ON', 'WHERE', 'GROUP BY',
  'ORDER BY', 'HAVING', 'LIMIT', 'AS', 'IN', 'AND', 'OR', 'DESC', 'ASC', 'COUNT',
  'AVG', 'SUM', 'ROUND', 'DISTINCT'
];

function resaltar(sql) {
  const partes = [];
  const regex = /(--[^\n]*)|('[^']*')|(\b\d+\b)|([A-Za-z_][A-Za-z0-9_]*)/g;
  let ultimo = 0;
  let m;
  while ((m = regex.exec(sql)) !== null) {
    if (m.index > ultimo) partes.push({ t: sql.slice(ultimo, m.index) });
    if (m[1]) partes.push({ t: m[1], c: 'sql-com' });
    else if (m[2]) partes.push({ t: m[2], c: 'sql-str' });
    else if (m[3]) partes.push({ t: m[3], c: 'sql-num' });
    else if (m[4]) {
      const kw = KEYWORDS.includes(m[4].toUpperCase());
      partes.push({ t: m[4], c: kw ? 'sql-kw' : undefined });
    }
    ultimo = regex.lastIndex;
  }
  if (ultimo < sql.length) partes.push({ t: sql.slice(ultimo) });
  return partes;
}

function Query({ sql }) {
  return (
    <pre className="sql-bloque">
      <code>
        {resaltar(sql).map((p, i) =>
          p.c ? (
            <span key={i} className={p.c}>{p.t}</span>
          ) : (
            <span key={i}>{p.t}</span>
          )
        )}
      </code>
    </pre>
  );
}

const ejercicios = [
  {
    n: 1,
    titulo: 'Las series más exitosas',
    enunciado:
      'Identificar las series más exitosas de NetflixDB, definiendo el éxito por la cantidad de episodios y el rating promedio de IMDb. El resultado es una tabla con tres columnas: título de la serie, cantidad de episodios y rating promedio de IMDb.',
    conceptos: ['JOIN', 'COUNT', 'AVG', 'GROUP BY'],
    sql: `SELECT
    s.titulo                       AS titulo_serie,
    COUNT(e.episodio_id)           AS cantidad_episodios,
    ROUND(AVG(e.rating_imdb), 2)   AS rating_promedio_imdb
FROM Series s
JOIN Episodios e ON e.serie_id = s.serie_id
GROUP BY s.serie_id, s.titulo
ORDER BY cantidad_episodios DESC, rating_promedio_imdb DESC;`,
    explicacion:
      'Uno la tabla Series con Episodios por serie_id, agrupo por serie y cuento sus episodios y calculo la media de rating. Ordeno por número de episodios y rating para que las series más exitosas aparezcan primero.'
  },
  {
    n: 2,
    titulo: 'Los 3 géneros más populares (con subconsulta)',
    enunciado:
      'Usar una subconsulta para identificar los tres géneros más populares (según la cantidad de series). Para cada género, mostrar el título de la serie, el año de lanzamiento y el rating de IMDb promedio.',
    conceptos: ['Subconsulta', 'IN', 'JOIN', 'GROUP BY', 'LIMIT'],
    sql: `SELECT
    s.genero,
    s.titulo,
    s.año_lanzamiento,
    ROUND(AVG(e.rating_imdb), 2)   AS rating_promedio_imdb
FROM Series s
JOIN Episodios e ON e.serie_id = s.serie_id
WHERE s.genero IN (
    SELECT genero
    FROM Series
    GROUP BY genero
    ORDER BY COUNT(serie_id) DESC
    LIMIT 3
)
GROUP BY s.serie_id, s.genero, s.titulo, s.año_lanzamiento
ORDER BY s.genero, rating_promedio_imdb DESC;`,
    explicacion:
      'La subconsulta del WHERE devuelve los tres géneros con más series. La consulta principal se queda solo con las series de esos géneros y, uniéndolas con Episodios, calcula el rating medio de cada una mostrando género, título y año.'
  }
];

export default function CertificacionSql() {
  return (
    <>
      <section className="hero hero-cielo">
        <h1>Certificación SQL</h1>
        <p className="subtitulo">Práctica sobre NetflixDB</p>
        <div className="raya" />
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">El Certificado</h2>
          <p className="subtitulo-seccion">
            SQL TOTAL — Domina Bases de Datos de 0 a Avanzado (Udemy). Formación completa en
            consultas, JOINs, agregaciones y subconsultas.
          </p>
          <div className="imagen-destacada" style={{ maxWidth: '760px' }}>
            <img src="/images/diploma-sql.png" alt="Certificado de finalización SQL TOTAL (Udemy)" />
          </div>
        </div>
      </section>

      <section className="seccion gris">
        <div className="contenedor">
          <h2 className="titulo-seccion">La Base de Datos: NetflixDB</h2>
          <p className="subtitulo-seccion">
            Modelo relacional de práctica: series, sus episodios, los actores y sus actuaciones.
          </p>
          <div className="db-grid">
            {tablas.map((t) => (
              <div className="db-tabla" key={t.nombre}>
                <div className="db-tabla-cab">{t.nombre}</div>
                <table>
                  <tbody>
                    {t.columnas.map((c) => (
                      <tr key={c[0]}>
                        <td className="db-col">{c[0]}</td>
                        <td className="db-tipo">{c[1]}</td>
                        <td className="db-key">{c[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
          <p className="nota" style={{ marginTop: '1.5rem' }}>
            PK = clave primaria · FK = clave foránea. Episodios.serie_id referencia a Series;
            Actuaciones enlaza Actores y Series (clave primaria compuesta).
          </p>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">Ejercicios Resueltos</h2>
          <p className="subtitulo-seccion">
            Cada reto con su enunciado, la consulta SQL que lo resuelve y una breve explicación.
          </p>
          <div className="ejercicios">
            {ejercicios.map((ej) => (
              <article className="ejercicio" key={ej.n}>
                <div className="ejercicio-cab">
                  <span className="ejercicio-num">Ejercicio {ej.n}</span>
                  <h3>{ej.titulo}</h3>
                </div>
                <p className="ejercicio-enunciado">🎯 {ej.enunciado}</p>
                <div className="badges">
                  {ej.conceptos.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
                <Query sql={ej.sql} />
                <p className="ejercicio-expl"><strong>Cómo funciona:</strong> {ej.explicacion}</p>
              </article>
            ))}
          </div>
          <p className="nota" style={{ marginTop: '2rem' }}>
            Se irán añadiendo más ejercicios resueltos a medida que avance la práctica.
          </p>
        </div>
      </section>
    </>
  );
}
