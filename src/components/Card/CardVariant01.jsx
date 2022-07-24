import React from "react"

import Tabs from "@/components/Tabs/Tabs"
import Accordion from "../Accordion/Accordion"

const CardVariant01 = props => {
  const handleExpanded = expanded => {
    return !expanded
  }
  return (
    <div style={{ border: "2px solid red" }}>
      <div style={{ border: "2px solid red", padding: 50 }}>
        <Accordion onExpand={handleExpanded}>
          <Accordion.Header>React hooks</Accordion.Header>
          <Accordion.Icon />
          <Accordion.Body>
            <img
              src="/api/collection/10370001/4597752283529216/page/5195905143668736/image/4691607934730240"
              style={{ width: "250px" }}
              alt="reintroducing react book cover"
            />
            <p style={{ opacity: 0.7 }}>
              This book is so amazing! <br />
              <a
                href="https://leanpub.com/reintroducing-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go get it now.
              </a>
            </p>
          </Accordion.Body>
        </Accordion>
      </div>

      <Tabs />
    </div>
  )
}

export default CardVariant01
