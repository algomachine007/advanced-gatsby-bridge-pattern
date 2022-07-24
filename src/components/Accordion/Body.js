import React, { useContext } from "react"
import { AccordionContext } from "./Accordion"
import * as styles from "./Body.module.scss"
const Body = ({ children, className, ...rest }) => {
  const combinedClassNames = [styles.AccordionPanel, className]
    .filter(Boolean)
    .join("")

  const { expanded } = useContext(AccordionContext)

  const renderComponent = () => {
    switch (expanded) {
      case true:
        return (
          <div className={combinedClassNames} {...rest}>
            {expanded ? children : null}
          </div>
        )

      case false:
        return null

      default:
        break
    }
  }

  return renderComponent()
}
export default Body
