import { useState } from "react";
import { FaLock } from "react-icons/fa6";
import closeIcon from "../../Assets/images/close.png";
import { IoMdMail } from "react-icons/io";


const LoginScreen = ({ closeFn }) => {
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
      <div className="modal-window">
        <div className="close-modal-div" onClick={closeFn}>
          <img src={closeIcon} alt="" />
        </div>
        <header className="modal-header-title">
          <h1>Login</h1>
        </header>
        <div className="modal--body">
          <form onSubmit={handleSubmit}>
            <div className="position-relative">
              <IoMdMail className="input-icon" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email"
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
                className="custom-inputs mb-4"
                size={35}
                value={formData.password}
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
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <div>
                <p>Forget Password?</p>
              </div>
            </div>
            <button className="submit-btn" type="submit" >
              Login
            </button>
            <p className="fontStyle text-light text-center mt-4 mb-5">
              Don't have an account?{" "}
              <span
                className="me-3 fw-bold "
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

export default LoginScreen