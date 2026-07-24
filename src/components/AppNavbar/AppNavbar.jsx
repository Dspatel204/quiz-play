import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./AppNavbar.css";
import logo from "../../Assets/images/transparentlogo.png";
import { useNavLink } from "../../context/NavLinkContext";
// import LoginModal from "../Modals/LoginModal";
// import RegisterModal from "../Modals/RegisterModal";

const AppNavbar = ({ openModal }) => {
  const { activeLink, handleNavLinkClick } = useNavLink();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.replace("/", "") || "home";
    if (currentPath !== activeLink) {
      handleNavLinkClick(currentPath);
    }
  }, [location.pathname, activeLink, handleNavLinkClick]);

  return (
    <Navbar expand="md" className="navbarr" collapseOnSelect>
      <Link to="/home" className="navbar-brand d-flex align-items-center">
        <img
          alt="Logo"
          src={logo}
          width="60"
          height="60"
          className="d-inline-block align-top"
        />
        <h1 className="brand-title">QUIZPLAY</h1>
      </Link>

      <Navbar.Toggle aria-controls="navbarResponsive" />

      <Navbar.Collapse id="navbarResponsive" className="justify-content-between">
        <Nav className="nav-links mx-auto">
          {["Home", "Store", "Community", "About"].map((link, index) => (
            <NavLink
              key={index}
              to={`/${link.toLowerCase()}`}
              className={({ isActive }) =>
                `nav-link position-relative ${isActive ? "active" : ""}`
              }
              onClick={() => handleNavLinkClick(link.toLowerCase())}
            >
              {link}
            </NavLink>
          ))}
        </Nav>

        <div className="nav-actions">
          <button
            type="button"
            className="nav-action-btn login-btn"
            data-modal="modal-login"
            onClick={openModal}
          >
            LOG IN
          </button>
          <button
            type="button"
            className="nav-action-btn register-btn"
            data-modal="modal-register"
            onClick={openModal}
          >
            REGISTER
          </button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
