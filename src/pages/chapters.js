import * as React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"

const ChapterPage = ({ data }) => (
  <Layout>
    <Seo title="Chapters" />
    <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    <h1>List of chapters</h1>
    
  </Layout>
)

export const query = graphql`
query MyQuery {
  allFile(filter: {ext: {eq: ".md"}}) {
    nodes {
      name
      ext
    }
  }
}
`
export default ChapterPage
