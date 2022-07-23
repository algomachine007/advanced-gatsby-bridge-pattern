import React from "react"
import * as styles from "./Modal.module.scss"
const Modal = ({ children, isOpen, toggleModal, handleStopPropagation }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.wrapper} onClick={toggleModal}>
          <div className={styles.body} onClick={handleStopPropagation}>
            <button onClick={toggleModal}>X</button>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
