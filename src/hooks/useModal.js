import { useState } from "react"
import { useTransition } from "react-spring"
const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const transitions = useTransition(isOpen, {
    from: { opacity: 0, transform: "translateY(-40px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-40px)" },
    reverse: isOpen,
    config: { mass: 1, tension: 300, friction: 20 },
  })

  const handleStopPropagation = e => {
    return e.stopPropagation()
  }
  return { toggleModal, handleStopPropagation, transitions }
}

export default useModal
