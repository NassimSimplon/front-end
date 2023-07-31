import React from "react";
import menu from "../assets/menu.svg";

const Navbar = () => {
  const [isOpen, setIOpen] = React.useState(true);
  return (
    <div className="nav">
      <h1>
        <span>P</span>ortfolio
      </h1>
      <ul id={isOpen ? "hide" : ""}>
        <a href="#description"><li>Acceuil</li></a>
        <a href="#apropos"><li>Apropos</li></a>
        <a href="#Education"><li>Education</li></a>
        <a href="#Compétences"><li>Compétences</li></a>
        <a href="#certif"><li>Certifications</li></a>
        <a href="#projects"><li>Projets</li></a>
        <a href="#Experiences"><li>Experiences</li></a>
        <a href="#vie"><li>Vie Associative</li></a>
      </ul>
      <img src={menu} onClick={() => setIOpen((prev) => !prev)} />
    </div>
  );
};

export default Navbar;
