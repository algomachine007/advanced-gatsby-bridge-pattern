import React from "react"

const CardVariant03 = props => {
  console.log("variant props", props)
  return (
    <div style={{ border: "2px solid yellow", margin: 60 }}>
      {props.title}
      <p style={{ color: "red" }}>Card Variant 03</p>

      {props.author.map((author, body, index) => {
        return (
          <div key={index}>
            <p>{author.name}</p>
            <p>
              {author.blogs.map(blog => (
                <div>
                  {blog.title}

                  <div>{body.raw}</div>
                </div>
              ))}
            </p>
          </div>
        )
      })}

      <div>{props.body.raw}</div>
    </div>
  )
}

export default CardVariant03
