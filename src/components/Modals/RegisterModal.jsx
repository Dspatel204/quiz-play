import React, { useState } from "react";
import Modal from "../../Modal";
import "./Modal.css";
import { IoMdMail } from "react-icons/io";
import { FaLock, FaPhone } from "react-icons/fa6";
import closeIcon from "../../Assets/images/close.png";

const RegisterModal = ({ closeFn = () => null, open = false }) => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    password: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({
    phoneNumber: "",
    email: "",
    password: "",
    agreeTerms: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear the error when the user starts typing
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Basic validation - you can customize this based on your requirements
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms & conditions";
    }

    setErrors(newErrors);

    // Return true if there are no errors, indicating the form is valid
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log("Form data:", formData);
      // Add your API call here
    } else {
      console.log("Form data is invalid. Please check for errors.");
    }
  };

  return (
    <>
      <Modal open={open}>
        <div className="modal--mask">
          <div className="modal-window">
            <div className="close-modal-div" onClick={closeFn}>
              <img src={closeIcon} alt="" />
            </div>
            <header className="modal-header-title">
              <h1>Registration</h1>
            </header>
            <div className="modal--body">
              <form >
                <div className="position-relative">
                  <FaPhone className="input-icon" size={20} />
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="custom-inputs"
                    autoFocus
                    size={35}
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="position-relative">
                  <IoMdMail className="input-icon" size={20} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className="custom-inputs"
                    size={35}
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="position-relative">
                  <FaLock className="input-icon " size={20} />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="custom-inputs"
                    size={35}
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="rem-pass text-light mb-4">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="agreeTerms">I agree to the terms & conditions</label>
                  {errors.agreeTerms && (
                <div className="error-message">{errors.agreeTerms}</div>
              )}
                </div>
                <button className="submit-btn" type="submit" onClick={handleSubmit}>
                  Register
                </button>
              </form>
              <p className="fontStyle text-light text-center mt-4 mb-5">
                Already have an account?{" "}
                <span
                  className="me-3 fw-bold"
                  style={{ cursor: "pointer" }}
                  data-modal="modal-login"
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RegisterModal;
