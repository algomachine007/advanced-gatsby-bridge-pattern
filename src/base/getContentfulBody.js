// The Bridge
import React from "react"
import Card from "@/components/Card"
import Hero from "@/components/Hero"

const body = {
  ContentfulBlogs: Card,
  ContentfulHero: Hero,
}

export const getContentfulBodySection = ({ id, ...props }) => {
  const { __typename } = props
  const Section = body[__typename] || <p>Section Not Found</p>

  return <Section key={id} {...props} />
}
