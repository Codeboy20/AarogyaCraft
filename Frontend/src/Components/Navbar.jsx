import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);
  const [showLanguagesDropdown, setShowLanguagesDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Languages");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isSignupMode, setIsSignupMode] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showUserOptions, setShowUserOptions] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setShowLanguagesDropdown(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLoginOrSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.nameField ? e.target.nameField.value : "";

    if (isSignupMode) {
      if (password.length < 8) {
        setPasswordError("Password must be at least 8 characters long.");
        return;
      }
      setPasswordError("");
      setIsSignupMode(false);
      alert("Signup successful! Please log in.");
      return;
    }

    setPasswordError("");
    const fakeName = email.split('@')[0];
    setLoggedInUser(fakeName);
    setShowLoginForm(false);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setShowUserOptions(false);
  };

  return (
    <>
      <nav className={`navbar ${showLoginForm ? "blurred" : ""}`}>
        <div className="logo">AarogyaCraft</div>

        <div className="hamburger" onClick={toggleMenu}>☰</div>

        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Our Services</Link></li>
          <li
            className="dropdown"
            onMouseEnter={() => setShowIndustriesDropdown(true)}
            onMouseLeave={() => setShowIndustriesDropdown(false)}
          >
            <span className="exper">Expertizes</span>
            <span className="dropdown-icon">▼</span>
            {showIndustriesDropdown && (
              <div className="expertizes-dropdown-menu">
                <div className="expertize-item">Technology</div>
                <div className="expertize-item">Banking</div>
                <div className="expertize-item">Education</div>
                <div className="expertize-item">Finance</div>
                <div className="expertize-item">Healthcare</div>
              </div>
            )}
          </li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li className="language-container">
            <div
              className="language-dropdown"
              onClick={() => setShowLanguagesDropdown(!showLanguagesDropdown)}
            >
              🌐 <span>{selectedLanguage}</span> ▼
            </div>
            {showLanguagesDropdown && (
              <ul className="dropdown-menu">
                {["English", "Spanish", "French", "Hindi", "Japanese", "Urdu", "German"].map(lang => (
                  <li key={lang} onClick={() => handleLanguageSelect(lang)}>
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            {loggedInUser ? (
              <div
                className="aarogya-username"
                onClick={() => setShowUserOptions(!showUserOptions)}
              >
                {loggedInUser}
                {showUserOptions && (
                  <ul className="user-options">
                    <li onClick={handleLogout}>Logout</li>
                  </ul>
                )}
              </div>
            ) : (
              <button
                className="aarogya-login-button"
                onClick={() => setShowLoginForm(true)}
              >
                {isSignupMode ? "Sign Up" : "Login"}
              </button>
            )}
          </li>
        </ul>
      </nav>

      {showLoginForm && (
        <div className="aarogya-login-overlay">
          <form className="aarogya-login-form" onSubmit={handleLoginOrSignup}>
            <div className="close-button" onClick={() => setShowLoginForm(false)}>✕</div>

            <h2 className="login-form-heading">Welcome to AarogyaCraft</h2>

            <input type="email" name="email" className="aarogya-login-input" placeholder="Email" required />
            <input type="password" name="password" className="aarogya-login-input" placeholder="Password" required />

            {isSignupMode && passwordError && (
              <div className="password-requirement">{passwordError}</div>
            )}
            {isSignupMode && (
              <input type="text" name="nameField" className="aarogya-login-input" placeholder="Full Name" required />
            )}

            <button type="submit" className="aarogya-login-submit">
              {isSignupMode ? "Sign Up" : "Login"}
            </button>

            <p className="aarogya-login-toggle">
              {isSignupMode ? (
                <>Already have an account? <span onClick={() => { setIsSignupMode(false); setPasswordError(""); }}>Login here</span></>
              ) : (
                <>New user? <span onClick={() => setIsSignupMode(true)}>Sign up here</span></>
              )}
            </p>

            <div className="aarogya-login-social">
              <button type="button" className="aarogya-social-button">
                <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="Google" />
                Sign up with Google
              </button>

              <button type="button" className="aarogya-social-button">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg" alt="Facebook" />
                Sign up with Facebook
              </button>
            </div>

          </form>
        </div>
      )}
    </>
  );
};

export default Navbar;
