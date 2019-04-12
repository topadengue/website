import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import ObjetivosPageTemplate from '../components/ObjetivosPageTemplate'
import Layout from '../components/Layout'

const ObjetivosPage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  console.log('frontmatter', frontmatter)
  return (
    <Layout>
      <ObjetivosPageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        descripcionObjetivoGeneral={frontmatter.descripcionObjetivoGeneral}
        objetivosGenerales={frontmatter.objetivosGenerales}
        objetivosEspecificos={frontmatter.objetivosEspecificos}
      />
    </Layout>
  )
}

ObjetivosPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ObjetivosPage

export const objetivosPageQuery = graphql`
  query ObjetivosPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        descripcionObjetivoGeneral
        objetivosGenerales
        objetivosEspecificos
      }
    }
  }
`
