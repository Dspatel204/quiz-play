import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./AppNavbar.css";
import logo from "../../Assets/images/transparentlogo.png";
import { useNavLink } from "../../context/NavLinkContext";
// import LoginModal from "../Modals/LoginModal";
// import RegisterModal from "../Modals/RegisterModal";

const AppNavbar = ({openModal}) => {
  const { activeLink, handleNavLinkClick } = useNavLink();
  // const [showLoginModal, setShowLoginModal] = useState(false);
  // const [showRegisterModal, setShowRegisterModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.replace("/", "") || "home";
    if (currentPath !== activeLink) {
      handleNavLinkClick(currentPath);
    }
  }, [location.pathname, activeLink, handleNavLinkClick]);

  // const handleLoginModalShow = () => setShowLoginModal(true);
  // const handleLoginModalClose = () => setShowLoginModal(false)
  // const handleRegisterModalShow = () => setShowRegisterModal(true);
  // const handleRegisterModalClose = () => setShowRegisterModal(false)

  return (
    <>
    <Navbar expand="md" className="navbarr">
      <Link to="/home">
        <Navbar.Brand className="me-0 d-flex align-items-center py-0">
          <img
            alt="Logo"
            src={logo}
            width="70"
            height="70"
            className="d-inline-block align-top"
          />
          <h1 className="brand-title">QUIZPLAY</h1>
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="navbarResponsive" />

      <Navbar.Collapse id="navbarResponsive" className="nav-centerLinks">
        <Nav className="ml-auto ">
          {["Home", "Store", "Community", "About"].map((link, index) => (
            <NavLink
              key={index}
              className={`position-relative nav-link `}
              to={`/${link.toLowerCase()}`}
              style={{ color: "white", fontSize: "20px" }}
              onClick={() => {
                handleNavLinkClick(link.toLowerCase());
              }}
            >
              {link}{" "}
              <div
                className={`${
                  activeLink === link.toLowerCase() ? "dot" : ""
                }`}
              ></div>
            </NavLink>
          ))}
        </Nav>
      </Navbar.Collapse>

      <Navbar.Collapse className="justify-content-end logRegBtn">
        <button variant="light" className=" navButtons me-2" data-modal="modal-login" >
          LOG IN
        </button> 
        <button variant="light" className="navButtons" data-modal="modal-register">
          REGISTER
        </button>
      </Navbar.Collapse>
    </Navbar>
    {/* <LoginModal show={showLoginModal} handleClose={handleLoginModalClose}/>
    <RegisterModal show={showRegisterModal} handleClose={handleRegisterModalClose}/>   */}
    </>
  );
};

export default AppNavbar;
