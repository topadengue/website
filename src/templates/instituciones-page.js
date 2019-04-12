import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import InstitucionesPageTemplate from '../components/InstitucionesPageTemplate'
import Layout from '../components/Layout'

const InstitucionesPage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <Layout>
      <InstitucionesPageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        financianList={frontmatter.financianList}
        desarrollanList={frontmatter.desarrollanList}
        apoyanList={frontmatter.apoyanList}
      />
    </Layout>
  )
}

InstitucionesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default InstitucionesPage

export const institucionesQuery = graphql`
  query InstitucionesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        financianList{
          img
          url
        }
         desarrollanList{
          img
          url
        }
        apoyanList{
          img
          url
        }
      }
    }
  }
`
