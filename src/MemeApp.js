import React from "react";
import image from "./troll-face.png";
export default function MemeApp() {
  return (
    <div>
      <header className="header">
        <img src={image} alt="" />
        <h1 className="title">Meme Generator</h1>

        <h3 className="subtitle">React Course - Project 3</h3>
      </header>
      <div className="container">
        <form action="">
          <input type="text" />
          <input type="text" />
          <button>Get a new meme image</button>
        </form>
      </div>
    </div>
  );
}
