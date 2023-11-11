import Footer from "./Footer";
import Home from "./Home";
import Trivia from "./Trivia";
import { useState } from "react";
import "./App.css";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [currCategory, setCurrCategory] = useState({});

  return (
    <div>
      {gameStarted ? (
        <Trivia category={currCategory} setGameStarted={setGameStarted} />
      ) : (
        <Home
          setGameStarted={setGameStarted}
          setCurrCategory={setCurrCategory}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
