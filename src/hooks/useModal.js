import React, { useState } from "react"

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const handleStopPropagation = e => {
    return e.stopPropagation()
  }
  return { toggleModal, handleStopPropagation, isOpen }
}

export default useModal
