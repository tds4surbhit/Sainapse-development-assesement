import React, { useState } from "react";
import LoginPage from "./LoginPage";
import "./WelcomePage.css";

function WelcomePage(props) {
  const { setShowFinalPage } = props;
  console.log("Props at Welcome page", props);
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseModal = () => {
    setShowLogin(false);
  };

  return (
    <div className="welcome-page">
      <div className="header">
        <div className="left-top">Sainapse Inc.</div>
        <div className="middle">
          <nav>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="right">
          <button onClick={handleLoginClick}>Login</button>
        </div>
      </div>
      <div className="background"></div>
      {showLogin && (
        <LoginPage
          onClose={handleCloseModal}
          setShowFinalPage={setShowFinalPage}
        />
      )}
    </div>
  );
}

export default WelcomePage;
