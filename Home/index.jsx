import React from "react";
import Logo from "../Main/Header/Logo";
import Generations from "../Main/Header/Generations";

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {/* Contoh penggunaan props lainnya */}
      <p>{props.description}</p>
      <Logo />
      <Generations />
    </div>
  );
};

export default Header;
