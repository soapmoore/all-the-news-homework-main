import React from "react";
import { NavAnchor } from "./styles";

const NavItem = ({ navItem, section, setSection }) => {
  const updateSection = (section) => {
    console.log(section);
    setSection(section);
  };

  return (
    <li>
      <NavAnchor
        className={navItem === section ? "active" : ""}
        href={`#${navItem}`}
        onClick={() => updateSection(navItem)}
      >
        {navItem}
      </NavAnchor>
    </li>
  );
};
export default NavItem;
