import * as React from "react"
import SEOHeader from "../components/SEOHeader"
import Layout from "../components/Layout/Layout"

const NotFoundPage = () => (
  <Layout title="Not Found">
    <SEOHeader title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
