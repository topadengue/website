import React from 'react'
import {Link, graphql, StaticQuery} from 'gatsby'
import SearchBox from '../SearchBox'
import logo from '../../assets/img/logo.png'
const NavBar = ({toggleNavbar, isActive}) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <img alt='' src={logo}/>
          </Link>
          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>

          <div className='navbar-end'>
            {/*<SearchBox searchIndex={data.siteSearchIndex.index} />*/}
            <Link className='navbar-item' to='/objetivos'>
              Objetivos
            </Link>
            <Link className='navbar-item' to='/resultadosEsperados'>
              Resultados esperados
            </Link>
            <Link className='navbar-item' to='/instituciones'>
              Instituciones
            </Link>
            <Link className='navbar-item' to='/blog'>
              Equipo
            </Link>
            <Link className='navbar-item' to='/resultados'>
              Resultados
            </Link>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <Link
                    className='button is-primary is-outlined'
                    to='/contact'>
                    Contacto
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
