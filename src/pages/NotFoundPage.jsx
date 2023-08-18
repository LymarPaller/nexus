import React, { useState, useEffect } from "react";
import Logo from "../assets/nexus-logo-blue.svg";
import "../styles/NotFoundPage.scss";

function NotFoundPage() {

  useEffect(() => {
    document.title = 'Page Not Found';  
  }, []);

  const [x, setX] = useState(100);
  const [y, setY] = useState(100);
  const [xVelocity, setXVelocity] = useState(1);
  const [yVelocity, setYVelocity] = useState(1);

  useEffect(() => {
    const maxX = window.innerWidth - 100; 
    const maxY = window.innerHeight - 100; 

    const updatePosition = () => {
      let newX = x + xVelocity;
      let newY = y + yVelocity;

      if (newX < 0 || newX > maxX) {
        setXVelocity(-xVelocity);
        newX = x + xVelocity;
      }

      if (newY < 0 || newY > maxY) {
        setYVelocity(-yVelocity);
        newY = y + yVelocity;
      }

      setX(newX);
      setY(newY);
    };

    const animation = setInterval(updatePosition, 10);

    return () => {
      clearInterval(animation);
    };
  }, [x, y, xVelocity, yVelocity]);

  return (
    <div className="not-found-container">
      <img
        src={Logo}
        alt="Nexus-logo"
        className="logo"
        style={{ top: y + "px", left: x + "px" }}
      />
      <h1>Page Not Found</h1>
    </div>
  );
}

export default NotFoundPage;
