import React from 'react'
import Helmet from 'react-helmet'
import Pricing from '../Pricing'
import PropTypes from 'prop-types'

const InstitucionesPageTemplate = ({title, meta_title, meta_description, financianList, desarrollanList, apoyanList}) => (
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
                  Financian
                </h2>
                <h4>PINV15-188</h4>
                <div className='columns is-multiline'>
                  {financianList.map((financia, key) => (
                    <div key={key} className='column is-3' style={{borderRadius: '5px'}}>
                      <section className='section'>
                        <p className='has-text-centered'>
                          <img height={200} width={200} alt='' src={financia.img}/>
                        </p>
                      </section>
                    </div>
                  ))}
                </div>
                <h2 className='has-text-weight-semibold is-size-2'>
                  Desarrolla
                </h2>
                <div className='columns is-multiline'>
                  {desarrollanList.map((desarrolla, key) => (
                    <div key={key} className='column is-3' style={{borderRadius: '5px'}}>
                      <section className='section'>
                        <p className='has-text-centered'>
                          <img height={200} width={200} alt='' src={desarrolla.img}/>
                        </p>
                      </section>
                    </div>
                  ))}
                </div>
                <h2 className='has-text-weight-semibold is-size-2'>
                  Apoyan
                </h2>
                <div className='columns is-multiline'>
                  {apoyanList.map((apoya, key) => (
                    <div key={key} className='column is-3' style={{borderRadius: '5px'}}>
                      <section className='section'>
                        <p className='has-text-centered'>
                          <img height={200} width={200} alt='' src={apoya.img}/>
                        </p>
                      </section>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

InstitucionesPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  financianList: PropTypes.array,
  desarrollanList: PropTypes.array,
  opoyanList: PropTypes.array,
}

export default InstitucionesPageTemplate
