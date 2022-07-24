import React, { useContext, useRef } from "react"
import { AccordionContext } from "./Accordion"
import * as styles from "./Body.module.scss"
const Body = ({ children, className, ...rest }) => {
  const combinedClassNames = [styles.AccordionPanel, className]
    .filter(Boolean)
    .join("")

  const { expanded } = useContext(AccordionContext)

  const bodyRef = useRef(null)

  const renderComponent = () => {
    switch (expanded) {
      case true:
        return (
          <div
            ref={bodyRef}
            className={combinedClassNames}
            {...rest}
            aria-expanded={`${expanded ? "true" : ""} `}
          >
            {expanded ? children : null}
          </div>
        )

      case false:
        return null

      default:
        break
    }
  }

  // return renderComponent()
  return (
    <div
      ref={bodyRef}
      className={combinedClassNames}
      {...rest}
      aria-expanded={`${expanded ? "true" : ""}`}
    >
      {expanded ? children : null}
    </div>
  )
}
export default Body
