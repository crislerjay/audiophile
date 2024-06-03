import { createContext, useEffect, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ModalToggle = () => {
    setIsModalOpen(!isModalOpen)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isModalOpen]);

  return (
    <ModalContext.Provider value={{ isModalOpen, ModalToggle, closeModal }}>
      { children }
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalProvider }