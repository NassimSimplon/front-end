import React from "react";
import menu from "../../../assets/menu.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIOpen] = React.useState(true);
  return (
    <div className="nav">
      <h1>
        <span>P</span>ortfolio
      </h1>
      <ul id={isOpen ? "hide" : ""}>

        <Link to="/Dashboard"><li>Education</li></Link>
        <Link to="/Dashboard/Compétences"><li>Compétences</li></Link>
        <Link to="/Dashboard/Certification"><li>Certifications</li></Link>
        <Link to="/Dashboard/Project"><li>Projets</li></Link>
        <Link to="/Dashboard/Experience"><li>Experiences</li></Link>
        <Link to="/Dashboard/VieAssoc"><li>Vie Associative</li></Link>
      </ul>
      <img src={menu} onClick={() => setIOpen((prev) => !prev)} />
    </div>
  );
};

export default Navbar;
