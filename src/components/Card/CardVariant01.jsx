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
        {[
          { title: "title1", content: "content1" },
          { title: "title2", content: "content2" },
        ].map(({ title, content }, idx) => {
          return (
            <Accordion onExpand={handleExpanded} key={idx}>
              <Accordion.Header>{title}</Accordion.Header>
              <Accordion.Icon />
              <Accordion.Body>
                <img
                  src="/api/collection/10370001/4597752283529216/page/5195905143668736/image/4691607934730240"
                  style={{ width: "250px" }}
                  alt="reintroducing react book cover"
                />
                <p style={{ opacity: 0.7 }}>
                  {content} <br />
                  <a
                    href="https://leanpub.com/reintroducing-react"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go get it now.
                  </a>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Suscipit explicabo mollitia quo perferendis quis similique
                    provident architecto quibusdam vel saepe, quisquam non atque
                    laudantium doloribus possimus eaque aperiam itaque dolorem?
                  </p>
                </p>
              </Accordion.Body>
            </Accordion>
          )
        })}
      </div>

      <Tabs />
    </div>
  )
}

export default CardVariant01
