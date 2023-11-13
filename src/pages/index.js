import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Pagination  from "../components/Pagination";

const PAGE_SIZE = 24;

const IndexPage = ({ data }) => {
  const [ page, setPage] = useState(0);
  let images = data.allFile.edges.map((e) => e.node.childImageSharp.thumb);

  const renderImages = () => {
    let pageImages = images.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
    return pageImages.map((i, index) => (
      <GatsbyImage id={`image${index}`} className="w-full md:w-1/4 lg:w-1/6" image={i} />
    ));
  };

  return (
    <main>
      <section className="text-gray-600 body-font">
        <div className="container pt-10 sm:px-5 sm:py-24 mx-auto flex flex-wrap">
       
          <div className="flex w-ful ml-5 sm:ml-0 mb-5 sm:mb-20 flex-wrap">
            <h1 className="lg:w-1/3 sm:text-5xl text-3xl mb-4 font-medium bg-clip-text text-transparent bg-gradient-to-br from-pink-500 text to-pink-200 blue-300">
        Los 15 de Olivia
      </h1>
            <p className="pl-6 lg:w-2/3 mx-auto leading-relaxed flex flex-row text-base align-text-bottom">
              Club de Golf, 14 de Octubre 2023
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            {renderImages()}
            <span className="w-full border-b mt-3 border-gray-300"></span>
          <Pagination currentPage={page} pageSize={PAGE_SIZE} setPage={setPage} elements={images} />
            </div>
        </div>
      </section>

      {/* <Footer></Footer> */}
    </main>
  );
};

export const pageQuery = graphql`
  query ImagesForGallery {
    allFile(filter: { relativePath: { regex: "/oli/" } }) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 320
              height: 320
              placeholder: DOMINANT_COLOR
              transformOptions: { cropFocus: NORTH }
            )
          }
        }
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <title>Los 15 de Olivia</title>;
