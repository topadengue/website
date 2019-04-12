import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import ResultadosEsperadosPageTemplate from '../components/ResultadosEsperadosPageTemplate'
import Layout from '../components/Layout'

const ResultadosEspeadosPage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  return (
    <Layout>
      <ResultadosEsperadosPageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        resultadosEsperados={frontmatter.resultadosEsperados}
      />
    </Layout>
  )
}

ResultadosEspeadosPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ResultadosEspeadosPage

export const resultadosEsperadosPageQuery = graphql`
  query ResultadosEsperadosPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        resultadosEsperados
      }
    }
  }
`
