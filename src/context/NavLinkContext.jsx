import { createContext, useContext, useEffect, useState } from 'react';

const NavLinkContext = createContext();

export const NavLinkProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState(() => {
    // Check if there's a saved active link in localStorage
    const storedActiveLink = localStorage.getItem('activeLink');
    return storedActiveLink || 'home';
  });

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    localStorage.setItem('activeLink', link);
  };

  useEffect(() => {
    const currentPath = window.location.pathname.replace('/', '') || 'home';
    if (currentPath !== activeLink) {
      setActiveLink(currentPath);
      localStorage.setItem('activeLink', currentPath);
    }
  }, [activeLink]);

  return (
    <NavLinkContext.Provider value={{ activeLink, handleNavLinkClick }}>
      {children}
    </NavLinkContext.Provider>
  );
};

export const useNavLink = () => {
  const context = useContext(NavLinkContext);
  if (!context) {
    throw new Error('useNavLink must be used within a NavLinkProvider');
  }
  return context;
};
