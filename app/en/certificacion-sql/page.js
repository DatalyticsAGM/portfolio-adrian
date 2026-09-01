export const metadata = {
  title: 'SQL Certification — Adrián Gallardo',
  description:
    'SQL certification (Udemy) and solved exercises on the NetflixDB database: JOINs, aggregations and subqueries.'
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
          p.c ? <span key={i} className={p.c}>{p.t}</span> : <span key={i}>{p.t}</span>
        )}
      </code>
    </pre>
  );
}

const ejercicios = [
  {
    n: 1,
    titulo: 'The most successful series',
    enunciado:
      'Identify the most successful series in NetflixDB, where success is defined by the number of episodes and the average IMDb rating. The result is a table with three columns: series title, number of episodes and average IMDb rating.',
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
      'I join Series with Episodios on serie_id, group by series and count its episodes while averaging the rating. Ordering by episode count and rating brings the most successful series to the top.'
  },
  {
    n: 2,
    titulo: 'The 3 most popular genres (with a subquery)',
    enunciado:
      'Use a subquery to identify the three most popular genres (by number of series). For each genre, show the series title, release year and average IMDb rating.',
    conceptos: ['Subquery', 'IN', 'JOIN', 'GROUP BY', 'LIMIT'],
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
      'The WHERE subquery returns the three genres with the most series. The main query keeps only the series in those genres and, joining with Episodios, computes each one’s average rating, showing genre, title and year.'
  }
];

export default function CertificacionSql() {
  return (
    <>
      <section className="hero hero-cielo">
        <h1>SQL Certification</h1>
        <p className="subtitulo">Practice on NetflixDB</p>
        <div className="raya" />
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">The Certificate</h2>
          <p className="subtitulo-seccion">
            SQL TOTAL — Master Databases from 0 to Advanced (Udemy). Full training in queries,
            JOINs, aggregations and subqueries.
          </p>
          <div className="imagen-destacada" style={{ maxWidth: '760px' }}>
            <img src="/images/diploma-sql.png" alt="SQL TOTAL completion certificate (Udemy)" />
          </div>
        </div>
      </section>

      <section className="seccion gris">
        <div className="contenedor">
          <h2 className="titulo-seccion">The Database: NetflixDB</h2>
          <p className="subtitulo-seccion">
            Practice relational model: series, their episodes, the actors and their roles.
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
            PK = primary key · FK = foreign key. Episodios.serie_id references Series; Actuaciones
            links Actores and Series (composite primary key).
          </p>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">Solved Exercises</h2>
          <p className="subtitulo-seccion">
            Each challenge with its prompt, the SQL query that solves it and a short explanation.
          </p>
          <div className="ejercicios">
            {ejercicios.map((ej) => (
              <article className="ejercicio" key={ej.n}>
                <div className="ejercicio-cab">
                  <span className="ejercicio-num">Exercise {ej.n}</span>
                  <h3>{ej.titulo}</h3>
                </div>
                <p className="ejercicio-enunciado">🎯 {ej.enunciado}</p>
                <div className="badges">
                  {ej.conceptos.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
                <Query sql={ej.sql} />
                <p className="ejercicio-expl"><strong>How it works:</strong> {ej.explicacion}</p>
              </article>
            ))}
          </div>
          <p className="nota" style={{ marginTop: '2rem' }}>
            More solved exercises will be added as the practice progresses.
          </p>
        </div>
      </section>
    </>
  );
}
