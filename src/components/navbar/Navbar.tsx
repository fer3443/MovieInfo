import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";
export const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleButtonMenu = (): void => setShow(!show);
  return (
    <header>
      <nav className="nav container">
        <a href="/">Movie Info</a>
        <div className={show ? "nav-menu show" : "nav-menu"}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home">Inicio</a>
            </li>
          </ul>
          <button className="btn-close" onClick={handleButtonMenu}>
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
        <button className="btn-toggle" onClick={handleButtonMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    </header>
  );
};
