export const metadata = {
  title: 'Bachelor’s Thesis — Leroy Merlin | Adrián Gallardo',
  description:
    'Bachelor’s thesis: improving Leroy Merlin product ratings through data analysis with Excel and R.'
};

export default function TfgLeroyMerlin() {
  return (
    <>
      <section className="hero hero-leroy">
        <h1>Thesis — Leroy Merlin</h1>
        <div className="raya" />
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">Goals and Approach</h2>
          <div className="etapas">
            <div className="etapa">
              <div className="imagen">
                <img src="/images/tfg-objetivo.png" alt="Leroy Merlin Spain in figures" className="contener" />
              </div>
              <h3>Goal</h3>
              <p>
                Improve the ratings of Leroy Merlin products versus the competition through data
                analysis.
              </p>
            </div>
            <div className="etapa">
              <div className="imagen">
                <img src="/images/tfg-solucion.png" alt="Leroy Merlin logistics" />
              </div>
              <h3>Solution</h3>
              <p>
                Increase the quality perceived by the customer through tighter control of product
                logistics and higher quality standards, among other measures.
              </p>
            </div>
            <div className="etapa">
              <div className="imagen">
                <img src="/images/tfg-tecnologias.png" alt="Excel and R" className="contener" />
              </div>
              <h3>Technologies</h3>
              <p>The thesis was built with Excel and the R programming language.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion gris">
        <div className="contenedor">
          <h2 className="titulo-seccion">Thesis Presentation</h2>
          <div className="video-marco">
            <iframe
              src="https://www.youtube.com/embed/BwDjnVwuCx0"
              title="Thesis presentation: optimising Leroy Merlin ratings"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">Extract, Transform, Load (ETL)</h2>
          <p className="subtitulo-seccion">Data cleaning and preparation in RStudio before the analysis.</p>
          <div className="video-marco">
            <iframe
              src="https://drive.google.com/file/d/18L3SCGcHgWsqs0jUVfUb3LkJD8VKYoID/preview"
              title="RStudio: Leroy Merlin data cleaning"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="seccion gris">
        <div className="contenedor">
          <h2 className="titulo-seccion">Analysis Stages</h2>

          <div className="bloque-analisis">
            <div className="grafico">
              <img src="/images/tfg-histograma.png" alt="Toilet price histogram" />
            </div>
            <div>
              <h3>Variation Analysis</h3>
              <p>
                The histogram shows most values concentrated between €150 and €250, with three
                main product groups. The curve is right-skewed, with a mean of €204.51 and a
                median of €199.27 — a faithful picture of the market.
              </p>
            </div>
          </div>

          <div className="bloque-analisis invertido">
            <div className="grafico">
              <img src="/images/tfg-covariacion.png" alt="Sensea vs Roca toilet ratings" />
            </div>
            <div>
              <h3>Covariation Analysis</h3>
              <p>
                Comparing the Sensea brand with its main competitor, Roca: Sensea receives twice
                as many negative reviews (ratings 1 to 3), while positive reviews are similar.
              </p>
              <p>
                The strategy must minimise negative reviews — they weigh most on consumer
                perception.
              </p>
            </div>
          </div>

          <div className="bloque-analisis">
            <div className="grafico">
              <img src="/images/tfg-correlacion.png" alt="Correlation matrix of numeric variables" />
            </div>
            <div>
              <h3>Correlation Analysis</h3>
              <p>
                There is a weak positive correlation between average rating and variables such as
                price, amount and number of reviews. A higher price allows investing in quality,
                which drives better ratings.
              </p>
            </div>
          </div>

          <div className="bloque-analisis invertido">
            <div className="grafico">
              <img src="/images/tfg-regresion.png" alt="Logistic regression results in R" />
            </div>
            <div>
              <h3>Logistic Regression</h3>
              <p>
                Unlike linear regression, the estimators represent changes in the probability of
                belonging to a category.
              </p>
              <p>
                Model confusion matrix: 60 true negatives, 40 false positives, 31 false negatives
                and 38 true positives.
              </p>
            </div>
          </div>

          <div className="bloque-analisis">
            <div className="grafico">
              <img src="/images/tfg-importancia-variables.png" alt="Variable importance in the model" />
            </div>
            <div>
              <h3>Key Variables to Avoid Complaints</h3>
              <ul>
                <li><strong>Manufacturing:</strong> Spanish and Portuguese products (like Roca) receive fewer complaints than those made outside Europe.</li>
                <li><strong>Material:</strong> ceramic toilets score better than porcelain ones.</li>
                <li><strong>Technical features:</strong> the Rimless system and removable lid make cleaning easier.</li>
                <li><strong>Strategy:</strong> move from a low-price model towards differentiation through quality.</li>
              </ul>
            </div>
          </div>

          <div className="bloque-analisis">
            <div className="grafico">
              <img src="/images/tfg-analisis-texto.png" alt="Most used words in MITOS reviews" />
            </div>
            <div>
              <h3>Text Analysis</h3>
              <p>
                Word count of the most frequent terms in customer reviews of Roca’s MITOS model.
              </p>
            </div>
          </div>

          <div className="bloque-analisis invertido">
            <div className="grafico">
              <img src="/images/tfg-nube-palabras.png" alt="Word cloud of MITOS reviews" />
            </div>
            <div>
              <h3>Word Cloud</h3>
              <p>
                The dominant terms in MITOS reviews: price, good, easy, lid...
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
