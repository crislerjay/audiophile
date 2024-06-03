import { createContext, useEffect, useState } from "react";

const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navToggle = () => {
    setIsNavOpen(!isNavOpen)
  }

  const closeNav = () => {
    setIsNavOpen(false)
  }

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isNavOpen]);

  return (
    <NavContext.Provider value={{ isNavOpen, navToggle, closeNav }}>
      { children }
    </NavContext.Provider>
  )
}

export { NavContext, NavProvider }