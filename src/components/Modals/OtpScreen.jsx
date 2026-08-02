import React, { useState } from "react";
import closeIcon from "../../Assets/images/close.png";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa6";

const OtpScreen = ({closeFn}) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
      });
    
      const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: type === "checkbox" ? checked : value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data:", formData);
        // Add your API call here
      };
  return (
    <div className="modal--mask">
        <div className="modal-window bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-purple-950/60">
          <div className="close-modal-div" onClick={closeFn}>
            <img src={closeIcon} alt="Close" className="w-5 h-5" />
          </div>
          <header className="modal-header-title">
            <h1>Login</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">OTP has been sent to your mobile number</p>
          </header>
          <div className="modal--body">
            <form onSubmit={handleSubmit}>
              <div className="position-relative">
                <IoMdMail className="input-icon" size={20} />
                <input
                  type="text"
                  name="digit1"
                //   placeholder="Email"
                  className="custom-inputs"
                  size={35}
                  value={formData.digit1}
                  onChange={handleInputChange}
                />
              </div>
              <div className="position-relative">
                <FaLock className="input-icon " size={20} />
                <input
                  type="text"
                  name="digit2"
                //   placeholder="Email"
                  className="custom-inputs"
                  size={35}
                  value={formData.digit2}
                  onChange={handleInputChange}
                />
              </div>
              <div className="d-flex rem-pass justify-content-between text-light mb-3">
                <div>
                  <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="rememberMe" className="text-slate-600 dark:text-slate-400">Remember me</label>
                </div>
                <div>
                  <p className="text-purple-600 dark:text-purple-400">Forget Password?</p>
                </div>
              </div>
              <button className="submit-btn" type="submit" >
                Login
              </button>
              <p className="fontStyle text-slate-500 dark:text-slate-400 text-center mt-4 mb-5">
                Don't have an account?{" "}
                <span
                  className="me-3 fw-bold text-purple-600 dark:text-purple-400"
                  style={{ cursor: "pointer" }}
                  data-modal="modal-register"
                >
                  Register
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
  )
}

export default OtpScreen