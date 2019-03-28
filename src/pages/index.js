import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebook,
  faTwitter,
  faGetPocket,
  faLine,
} from '@fortawesome/free-brands-svg-icons'
import { faClock, faImage } from '@fortawesome/free-solid-svg-icons'
import Card from '../components/Card'

import { stripBasename } from 'history/PathUtils'

library.add(faTwitter, faFacebook, faGetPocket, faLine, faClock, faImage)

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content" />
            {posts.map(({ node: post }, index) => {
              // 最初の記事は要約を表示する（未実装）
              if (index === 0) {
                return <Card key={index} content={post} />
              }
              return <Card key={index} content={post} />
            })}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            tags
            templateKey
            date(formatString: "YYYY.MM.DD")
          }
        }
      }
    }
  }
`
