import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faGetPocket, faLine } from '@fortawesome/free-brands-svg-icons'
import { faClock, faImage } from '@fortawesome/free-solid-svg-icons'
import Card from '../components/Card'

import { stripBasename } from 'history/PathUtils';

library.add(
  faTwitter,
  faFacebook,
  faGetPocket,
  faLine,
  faClock,
  faImage
)

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
            </div>
            {posts
              .map(({ node: post }) => <Card content={post}/> )
            }
          </div>
        </section>
        <Top 
          title={siteMetadata.title}
          description={siteMetadata.description}
        />
        <div>
          {posts.map(({ node: post }, index) => {
              if (index === 0) {
                return (
                  <Link to={post.fields.slug}>
                    <div>
                      <p>{post.frontmatter.title}</p>
                      <p>{post.frontmatter.date}</p>
                      <p>{post.excerpt}</p>
                    </div>
                  </Link>
                )
              }
              return (
                <Link to={post.fields.slug}>
                  <div>
                    <p>{post.frontmatter.title}</p>
                    <p>{post.frontmatter.date}</p>
                  </div>
                </Link>
              )
            })}
        </div>
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
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
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
