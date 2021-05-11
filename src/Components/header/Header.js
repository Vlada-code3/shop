import React from "react";
import { HeaderContainer } from "./HeaderStyled";
import Navigation from "./navigation/Navigation";

const Header = () => {
  return (
      <HeaderContainer>
          <a href="/">Fatty Hugo</a>
          
          <Navigation/>
         
      </HeaderContainer>
  );
};

export default Header;
