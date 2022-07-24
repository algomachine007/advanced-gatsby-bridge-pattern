import { useContext } from "react"
import { AccordionContext } from "./Accordion"
import * as styles from "./Accordion.module.scss"

const Icon = () => {
  const { expanded } = useContext(AccordionContext)
  return expanded ? "-" : "+"
}
export default Icon
