/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const description = site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const title = site.siteMetadata.title

  return (
    <Helmet
      title={title}
      defaultTitle={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
    >
      <html lang="en" />
      <meta name="description" content={description} />
      {/* <meta name="image" content={image} /> */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={image} /> */}
      {/* <meta property="og:url" content={url} /> */}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="twitterUsername" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content={image} /> */}
    </Helmet>
  )
}

export default Seo
