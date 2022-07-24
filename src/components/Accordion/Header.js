//Header.js
import React, { useContext } from "react"
import { AccordionContext } from "./Accordion"
import * as styles from "./Accordion.module.scss"
const Header = ({ children, className = "", ...otherProps }) => {
  const combinedClassName = [styles.AccordionTrigger, className]
    .filter(Boolean)
    .join("")
  console.log(combinedClassName)

  const { toggleExpanded } = useContext(AccordionContext)

  return (
    <button
      className={combinedClassName}
      {...otherProps}
      onClick={toggleExpanded}
    >
      {children}
    </button>
  )
}
export default Header
