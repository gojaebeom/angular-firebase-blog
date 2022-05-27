import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { MDXProvider } from "@mdx-js/react"
import codeblock from "../../components/codeblock"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function PostDetail({ data }) {
  return (
    <Layout>
      <div className="flex justify-items-start">
        <div className="w-2/3">
          <div>
            <img
              src={`/${data.mdx.frontmatter.cover}`}
              className="rounded-xl"
            />
          </div>
          <h1 className="text-5xl font-noto-b mt-4">
            {data.mdx.frontmatter.title}
          </h1>
          <p className="text-xl mt-4">{data.mdx.frontmatter.date}</p>
          <div className="prose-lg text-white p-4 rounded-xl mt-10">
            <MDXProvider components={{ code: codeblock }}>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </MDXProvider>
          </div>
        </div>
        <div>ddddddddd</div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        cover
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`
