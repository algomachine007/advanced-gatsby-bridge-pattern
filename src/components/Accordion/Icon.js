import React, { useContext } from "react"
import { AccordionContext } from "./Accordion"
import * as styles from "./Icon.module.scss"

const Icon = ({ className, ...rest }) => {
  const { expanded } = useContext(AccordionContext)
  const combinedClassName = [styles.AccordionIcon, className]
    .filter(Boolean)
    .join(" ")

  return (
    <div
      {...rest}
      className={combinedClassName}
      aria-expanded={`${expanded ? "true" : ""} `}
    >
      {expanded ? <span> "-" </span> : <span> "+" </span>}
    </div>
  )
}
export default Icon
