import Masonry from "masonry-layout"
import imagesLoaded from "imagesloaded"
import React from "react"

export default function useIndex() {
  if (typeof window !== "undefined") {
    React.useEffect(() => {
      const masonryLayoutEl = document.querySelector(".masonry-layout")
      console.debug(masonryLayoutEl)
      imagesLoaded(masonryLayoutEl, () => {
        new Masonry(masonryLayoutEl, {
          // options
          itemSelector: ".masonry-item",
          // columnWidth: 300,
        })
      })
    }, [])
  }
}
