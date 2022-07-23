import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "./Hero01.module.scss"
const Hero01 = ({ description, image }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h3 dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      <div style={{ width: 200 }}>
        <GatsbyImage image={image.gatsbyImageData} alt={description} />
      </div>
    </div>
  )
}

export default Hero01
