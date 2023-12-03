import React from "react";
import Logo from "../Main/Header/Logo";
import Generations from "../Main/Header/Generations";

const Header = () => {
  return (
    <div>
      <h1>header</h1>
      <h2>{props.title}</h2>
        {/* Contoh penggunaan props lainnya */}
        <p>{props.description}</p>
      <Logo />
      <Generations />
    </div>
  );
};

export default Header;