import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import useModal from "./../../hooks/useModal"
import Button from "../Button/Button"
import * as styles from "./Hero01.module.scss"
import Modal from "../Modal/Modal"
const Hero01 = ({ description, image }) => {
  const { handleStopPropagation, toggleModal, transitions } = useModal()

  return (
    <div className={styles.wrapper}>
      <div>
        <h3 dangerouslySetInnerHTML={{ __html: description }} />
        <Button
          text="Reach out"
          onClick={toggleModal}
          style={{ color: "red" }}
        />
      </div>

      <Modal
        handleStopPropagation={handleStopPropagation}
        transitions={transitions}
        toggleModal={toggleModal}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, maxime.
        Modi, nam provident, veritatis sed sit velit dicta saepe ratione quos
        laudantium nostrum officiis qui minima similique inventore doloribus
        quod!
      </Modal>

      <div style={{ width: 500 }}>
        <GatsbyImage image={image.gatsbyImageData} alt={description} />
      </div>
    </div>
  )
}

export default Hero01
