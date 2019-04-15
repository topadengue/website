import React from 'react'
import Helmet from 'react-helmet'

const ResultadosPageTemplate = ({title, meta_title, meta_description, resultados}) =>
  (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='hero is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>
                    {title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  <h2 className='has-text-weight-semibold is-size-2'>
                    Publicaciones
                  </h2>
                  {resultados.map((resultado, key) =>
                    <div key={key} className='columns is-vertical'><a className='is-size-5'
                      href={resultado.url}
                      target='_blank'>{`${key + 1}) ${resultado.titulo}`}</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

export default ResultadosPageTemplate
