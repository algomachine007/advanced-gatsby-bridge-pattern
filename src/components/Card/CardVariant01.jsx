import React from "react"

import Tabs from "@/components/Tabs/Tabs"
import Accordion from "../Accordion/Accordion"

const CardVariant01 = props => {
  return (
    <div style={{ border: "2px solid red" }}>
      <div style={{ border: "2px solid red", padding: 50 }}>
        <Accordion>
          <Accordion.Header>React hooks</Accordion.Header>
          <Accordion.Icon />
          <Accordion.Body>Hooks are awesome</Accordion.Body>
        </Accordion>
      </div>

      <Tabs />
    </div>
  )
}

export default CardVariant01
