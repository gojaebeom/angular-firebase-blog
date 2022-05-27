import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.debug(data)
  return (
    <div className="flex items-start justify-center w-full h-screen overflow-x-hidden text-white">
      <div className="w-full  lg:w-10/12 max-w-[1500px]">
        <header>
          <div className="flex items-center justify-start px-2 py-4 lg:px-0">
            <Link to="/">
              <figure className="text-3xl font-noto-b">
                {data.site.siteMetadata.title}
              </figure>
            </Link>
          </div>
        </header>
        <main className="mt-4">{children}</main>
        <footer>
          © {new Date().getFullYear()} &middot; Built with
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}
