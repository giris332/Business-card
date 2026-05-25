import { useState } from "react";
import "./App.css";

export default function App() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="container">
      <div
        className={`card ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="front">
          <img src="/front.png" alt="Front Card" />
        </div>

        <div className="back">
          <img src="/back.png" alt="Back Card" />
        </div>
      </div>
    </div>
  );
}