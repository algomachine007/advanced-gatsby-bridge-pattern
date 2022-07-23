import React from "react"
import { animated } from "react-spring"
import * as styles from "./Modal.module.scss"
const Modal = ({
  children,
  toggleModal,
  handleStopPropagation,
  transitions,
}) => {
  return (
    <>
      {transitions(
        ({ opacity }, item) =>
          item && (
            <animated.div
              className={styles.wrapper}
              onClick={toggleModal}
              style={{
                opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
              }}
            >
              <div className={styles.body} onClick={handleStopPropagation}>
                <button onClick={toggleModal}>X</button>
                <div>{children}</div>
              </div>
            </animated.div>
          )
      )}
    </>
  )
}

export default Modal
