import React from "react";
import { HeaderStyle, H1 } from "./styles";

const Header = ({ siteTitle }) => {
  return (
    <HeaderStyle>
      <H1>{siteTitle}</H1>
    </HeaderStyle>
  );
};

export default Header;
