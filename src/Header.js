import React from "react";
import image from "./troll-face.png";
export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={image} alt="" />
      <h1 className="title">Meme Generator</h1>

      <h3 className="subtitle">React Course - Project 3</h3>
    </header>
  );
}
