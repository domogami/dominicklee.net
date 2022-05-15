import Logo from "../images/Logo.svg"
import { useState } from "react";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="logo" />
      <ul>
        <li className="active"><a href="/">Homie</a></li>
        <li className="non-active"><a href="/"> Projects</a></li>
        <li className="non-active"><a href="/"> Blog</a></li>
        <li className="non-active"><a href="/"> Contact</a></li>
      </ul>
      <div className={`menu-btn${menuIsOpen ? ' open' : ''}`} onClick={() => setMenuIsOpen(!menuIsOpen)}>
        <div className="menu-btn__burger"></div>
      </div>
    </div>
  );
}
