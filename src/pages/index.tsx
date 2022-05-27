import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import useIndex from "./index.service"

export default function IndexPage({ data }) {
  useIndex()
  return (
    <Layout>
      <Seo title="Home" />
      <div className="flex items-center justify-start p-2 lg:p-0">
        <span className="mt-1 mr-2 text-2xl font-founder-b lg:text-4xl">
          Posts
        </span>
        <span className="mr-2 lg:font-semibold">최근</span>
        <span className="lg:font-semibold">오래된</span>
      </div>

      <div className="w-full masonry-layout">
        {data.allMdx.nodes.map(node => {
          return (
            <article
              className="w-1/2 md:w-[33%] lg:w-[25%] xl:w-[20%] p-2 masonry-item mb-4"
              key={node.id}
            >
              <div className="w-full overflow-hidden rounded-3xl">
                <img src={node.frontmatter.thumbnail} />
              </div>
              <div className="p-2">
                <div className="text-sm lg:text-md">
                  <i className="mr-1 fa-light fa-timer"></i>
                  <span className="font-noto-l">{node.frontmatter.date}</span>
                </div>
                <Link to={`/blog/${node.frontmatter.slug}`}>
                  <div className="text-lg lg:text-xl font-noto-b2">
                    {node.frontmatter.title}
                  </div>
                </Link>

                <div className="text-xs lg:text-sm">
                  {node.frontmatter.excerpt}
                </div>
              </div>
              <div className="flex flex-wrap justify-start">
                <span className="flex items-center justify-center mr-2 text-xs font-semibold text-blue-500">
                  <i className="fa-light fa-hashtag"></i>
                  {node.frontmatter.category}
                </span>
              </div>
            </article>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          slug
          title
          date(formatString: "MMMM D, YYYY")
          excerpt
          thumbnail
        }
      }
    }
  }
`
