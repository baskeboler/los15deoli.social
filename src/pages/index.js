import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}






const IndexPage = ({data}) => {
  return (
    <main style={pageStyles}>
      <h1 className="text-xl" style={headingStyles}>
        Los 15 de Olivia
      </h1>
     
      <div>
        {data.allFile.edges.map(e => (
          <GatsbyImage image={e.node.childImageSharp.thumb}/>
        ))}
      </div>

    </main>
  )
}

export const pageQuery = graphql`
query ImagesForGallery {
  allFile(filter: {relativePath: {regex: "/oli/"}}) {
    edges {
      node {
        relativePath
        childImageSharp {
          thumb: gatsbyImageData(
            width: 270
            height: 270
            placeholder: DOMINANT_COLOR
            transformOptions: {cropFocus: NORTH}
          )
        }
      }
    }
  }
}
`

export default IndexPage

export const Head = () => <title>Home Page</title>
