import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const ObjetivosPageTemplate = ({title, meta_title, meta_description, descripcionObjetivoGeneral, objetivosGenerales, objetivosEspecificos}) =>
  (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description}/>
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
                    Objetivos generales
                  </h2>
                  <p className='is-size-5'>{descripcionObjetivoGeneral}</p>
                  {objetivosGenerales.map((objetivoGeneral, key) =>
                    <p key={key} className='is-size-5'>{`${key + 1}) ${objetivoGeneral}`}</p>,
                  )}
                  <h2 className='has-text-weight-semibold is-size-2'>
                    Objetivos Específicos
                  </h2>
                  {objetivosEspecificos.map((objetivoEspecifico, key) =>
                    <p key={key} className='is-size-5'>{`${key + 1}) ${objetivoEspecifico}`}</p>,
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

ObjetivosPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  descripcionObjetivoGeneral: PropTypes.string,
  objetivosGenerales: PropTypes.array,
  objetivosEspecificos: PropTypes.array,
}

export default ObjetivosPageTemplate
