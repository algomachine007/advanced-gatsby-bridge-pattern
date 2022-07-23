import React from "react"
import Modal from "@/components/Modal/Modal"
import useModal from "./../../hooks/useModal"

const CardVariant01 = props => {
  const { isOpen, handleStopPropagation, toggleModal, transitions } = useModal()
  console.log("props", props)
  return (
    <div style={{ border: "2px solid red" }}>
      {/* {props?.title}
      CardVariant01 */}

      <button onClick={toggleModal}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        handleStopPropagation={handleStopPropagation}
        toggleModal={toggleModal}
        transitions={transitions}
      >
        Ich spreche Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Error, nobis cumque, consectetur atque omnis sunt perspiciatis
        voluptatem dolore rerum id dicta nesciunt iure tenetur tempore maiores.
        Cum quisquam id voluptatibus.
      </Modal>
    </div>
  )
}

export default CardVariant01
