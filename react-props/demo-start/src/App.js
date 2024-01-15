import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <div className="animal">
        Meow
        <span role="img" aria-label="A cat">
          🐈
        </span>
      </div>
      <div className="animal">
        Woof
        <span role="img" aria-label="A dog">
          🐕
        </span>
      </div>
      <div className="animal">
        Squeak
        <span role="img" aria-label="A mouse">
          🐁
        </span>
      </div>
    </div>
  );
}
