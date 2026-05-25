import { useState } from "react";
import "./App.css";

export default function App() {
  const [flip, setFlip] = useState(false);

  return (
    <div className="container">
      <div
        className={`card ${flip ? "flip" : ""}`}
        onClick={() => setFlip(!flip)}
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