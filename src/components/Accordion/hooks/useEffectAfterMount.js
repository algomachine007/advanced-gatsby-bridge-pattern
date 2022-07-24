// useEffectAfterMount.js
import { useRef, useEffect } from "react"

export default function useEffectAfterMount(cb, deps) {
  const componentJustMounted = useRef(true)
  useEffect(() => {
    if (!componentJustMounted.current) {
      return cb()
    }
    componentJustMounted.current = false
  }, deps)
}

// The only difference here is that useEffectAfterMount doesn’t return any value. Rather, it invokes the useEffect hook. To make this as generic as possible, the custom hook takes in two arguments, the callback to be invoked after mount, and the array dependencies on which the useEffect function relies.
