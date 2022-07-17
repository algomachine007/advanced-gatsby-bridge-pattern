import React from "react"

const CardVariant03 = props => {
  return (
    <div style={{ border: "2px solid yellow" }}>
      {props.title}
      <p style={{ color: "red" }}>Variant 03</p>

      {props.author.map((author, index) => {
        return (
          <div key={index}>
            <p>{author.name}</p>
            <p>
              {author.blogs.map(blog => (
                <div>{blog.title}</div>
              ))}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default CardVariant03
