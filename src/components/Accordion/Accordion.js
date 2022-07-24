import React, { createContext } from "react"

const AccordionContext = createContext()
const { Provider } = AccordionContext

const Accordion = ({ children }) => {
  return <Provider>{children}</Provider>
}

export default Accordion
