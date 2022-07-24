import { useContext } from "react"
import { AccordionContext } from "./Accordion"
import * as styles from "./Accordion.module.scss"
const Body = ({ children }) => {
  console.log("context", AccordionContext)
  const { expanded } = useContext(AccordionContext)
  return expanded ? children : null
}
export default Body
