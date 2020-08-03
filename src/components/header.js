import React from "react";
import BasketCount from "./basket-count";
import Logo from "./logo";

export default function Header() {
  return (
    <div className="Header">
      <Logo />
      <BasketCount />
    </div>
  );
}
