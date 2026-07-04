export const metadata = {
  title: 'TFG Leroy Merlin — Adrián Gallardo',
  description:
    'Trabajo de Fin de Grado: optimización de las valoraciones de productos de Leroy Merlin mediante análisis de datos con Excel y R.'
};

export default function TfgLeroyMerlin() {
  return (
    <>
      <section className="hero hero-leroy">
        <h1>TFG Leroy Merlin</h1>
        <div className="raya" />
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">Etapas y Objetivos</h2>
          <div className="etapas">
            <div className="etapa">
              <div className="imagen">
                <img src="/images/tfg-objetivo.png" alt="Leroy Merlin España en cifras" className="contener" />
              </div>
              <h3>Objetivo</h3>
              <p>
                Mejorar las calificaciones de las valoraciones de los productos de Leroy Merlin
                respecto de su competencia a través del análisis de datos.
              </p>
            </div>
            <div className="etapa">
              <div className="imagen">
                <img src="/images/tfg-solucion.png" alt="Logística de Leroy Merlin" />
              </div>
              <h3>Solución</h3>
              <p>
                Aumentar la calidad percibida por el cliente mediante un mayor control de la
                logística del producto, así como el aumento de calidad entre otras soluciones.
              </p>
            </div>
            <div className="etapa">
              <div className="imagen">
                <img src="/images/tfg-tecnologias.png" alt="Excel y R" className="contener" />
              </div>
              <h3>Tecnologías</h3>
              <p>
                Las tecnologías que se utilizaron para realizar mi Trabajo de Fin de Grado fueron
                Excel y el lenguaje de programación R.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion gris">
        <div className="contenedor">
          <h2 className="titulo-seccion">Presentación TFG</h2>
          <div className="video-marco">
            <iframe
              src="https://www.youtube.com/embed/BwDjnVwuCx0"
              title="Presentación TFG: optimización de las valoraciones de Leroy Merlin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">Extracción, Transformación y Carga (ETL)</h2>
          <p className="subtitulo-seccion">
            Limpieza y preparación de los datos en RStudio antes del análisis.
          </p>
          <div className="video-marco">
            <iframe
              src="https://drive.google.com/file/d/18L3SCGcHgWsqs0jUVfUb3LkJD8VKYoID/preview"
              title="RStudio: limpieza de datos Leroy Merlin"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="seccion gris">
        <div className="contenedor">
          <h2 className="titulo-seccion">Etapas del Análisis</h2>

          <div className="bloque-analisis">
            <div className="grafico">
              <img src="/images/tfg-histograma.png" alt="Histograma del precio de los inodoros" />
            </div>
            <div>
              <h3>Análisis de Variación</h3>
              <p>
                El histograma muestra que la mayoría de los valores se concentran en el intervalo de
                150 a 250 euros, y se identifican tres grupos principales de productos. Aunque hay
                valores atípicos, la curva no es necesaria una transformación logarítmica, ya que
                representa la realidad del mercado.
              </p>
              <p>
                La curva está sesgada a la derecha, con una media de 204,51 euros y una mediana de
                199,27 euros.
              </p>
            </div>
          </div>

          <div className="bloque-analisis invertido">
            <div className="grafico">
              <img
                src="/images/tfg-covariacion.png"
                alt="Valoraciones de los inodoros Sensea frente a Roca"
              />
            </div>
            <div>
              <h3>Análisis de Covariación</h3>
              <p>
                Al comparar la marca Sensea con su principal competidora, Roca, se observa que
                Sensea recibe el doble de críticas negativas (valoraciones entre 1 y 3), aunque las
                valoraciones positivas son similares.
              </p>
              <p>
                La estrategia debe minimizar las valoraciones negativas: son las que más pesan en la
                percepción del consumidor.
              </p>
            </div>
          </div>

          <div className="bloque-analisis">
            <div className="grafico">
              <img
                src="/images/tfg-correlacion.png"
                alt="Gráfico de correlación de las variables numéricas"
              />
            </div>
            <div>
              <h3>Análisis de Correlación</h3>
              <p>
                Existe una correlación positiva débil entre la valoración media y variables como el
                precio, el importe y la cantidad de reseñas.
              </p>
              <p>
                Un mayor precio permite invertir en calidad, lo que incrementa las valoraciones
                positivas.
              </p>
            </div>
          </div>

          <div className="bloque-analisis invertido">
            <div className="grafico">
              <img src="/images/tfg-regresion.png" alt="Resultados de la regresión logística en R" />
            </div>
            <div>
              <h3>Regresión Logística</h3>
              <p>
                La regresión logística se distingue de la regresión lineal en que los estimadores
                representan cambios en las probabilidades de pertenecer a una categoría.
              </p>
              <p>
                La matriz de confusión del modelo: 60 verdaderos negativos, 40 falsos positivos, 31
                falsos negativos y 38 verdaderos positivos.
              </p>
            </div>
          </div>

          <div className="bloque-analisis">
            <div className="grafico">
              <img
                src="/images/tfg-importancia-variables.png"
                alt="Importancia de las variables del modelo"
              />
            </div>
            <div>
              <h3>Variables Importantes para No Recibir una Queja</h3>
              <ul>
                <li>
                  <strong>Fabricación:</strong> los productos españoles y portugueses (como Roca)
                  reciben menos quejas que los fabricados fuera de Europa.
                </li>
                <li>
                  <strong>Material:</strong> los inodoros de cerámica generan menores puntuaciones
                  negativas que los de porcelana.
                </li>
                <li>
                  <strong>Características técnicas:</strong> el sistema Rimless y la tapa extraíble
                  facilitan la limpieza.
                </li>
                <li>
                  <strong>Estrategia:</strong> pasar de un modelo basado en precios bajos hacia la
                  diferenciación por calidad.
                </li>
              </ul>
            </div>
          </div>

          <div className="bloque-analisis">
            <div className="grafico">
              <img
                src="/images/tfg-analisis-texto.png"
                alt="Palabras más utilizadas en las reseñas del modelo MITOS"
              />
            </div>
            <div>
              <h3>Análisis de Texto</h3>
              <p>
                Conteo de las palabras más utilizadas en las opiniones de los clientes para el
                modelo MITOS de la marca Roca.
              </p>
            </div>
          </div>

          <div className="bloque-analisis invertido">
            <div className="grafico">
              <img
                src="/images/tfg-nube-palabras.png"
                alt="Nube de palabras de las reseñas del modelo MITOS"
              />
            </div>
            <div>
              <h3>Nube de Palabras</h3>
              <p>
                Visualización de los términos predominantes en las reseñas del modelo MITOS de la
                marca Roca: precio, bien, buena, fácil, tapa...
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
