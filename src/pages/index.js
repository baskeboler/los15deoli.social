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
    <main >
       
     <section class="text-gray-600 body-font">
       <div class="container px-5 py-24 mx-auto flex flex-wrap">
         <div class="flex w-full mb-20 flex-wrap">
           <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Los 15 de Olivia</h1>
           <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Club de Golf, 2023</p>
         </div>
         <div class="flex flex-wrap md:-m-2 -m-1">
         {data.allFile.edges.map(e => (
          <GatsbyImage className="w-full md:w-1/4 lg:w-1/6" image={e.node.childImageSharp.thumb}/>
        ))}
         </div>
       </div>
     </section>
      
   

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
            width: 320
            height: 320
            layout: CONSTRAINED
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
