import React from "react";

const NavItem = (props) => {
  const updateSection = (section) => {
    console.log(section);
    props.setSection(section);
  };

  return (
    <li>
      <a
        className={props.navItem === props.section ? "active" : ""}
        href={`#${props.navItem}`}
        onClick={() => updateSection(props.navItem)}
      >
        {props.navItem}
      </a>
    </li>
  );
};
export default NavItem;
