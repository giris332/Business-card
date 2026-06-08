import { useState } from "react";
import "./App.css";

export default function App() {
  const [flip, setFlip] = useState(false);

  const person = window.location.pathname.replace("/", "");

  let backImage = "/kiran.png";

  switch (person) {
    case "kiran":
      backImage = "/kiran.png";
      break;

    case "prathiksha":
      backImage = "/prathiksha.png";
      break;

    default:
      backImage = "/kiran.png";
  }

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
          <img src={backImage} alt="Back Card" />
        </div>
      </div>
    </div>
  );
}