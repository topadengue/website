import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import ResultadosPageTemplate from '../components/ResultadosPageTemplate'
import Layout from '../components/Layout'

const ResultadosPage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  return (
    <Layout>
      <ResultadosPageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        resultados={frontmatter.resultados}
      />
    </Layout>
  )
}

ResultadosPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ResultadosPage

export const resultadosPageQuery = graphql`
  query ResultadosPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        resultados {
          titulo
          url
        }
      }
    }
  }
`
