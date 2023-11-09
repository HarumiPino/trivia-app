import Footer from "./Footer";
import Home from "./Home";
import Trivia from "./Trivia";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [categories, setCategories] = useState([]);
  const [currCategory, setCurrCategory] = useState({});

  useEffect(() => {
    console.log("Fetching categories...");
    fetchCategories();
  }, []);

  function startGame() {
    setGameStarted(true);
  }

  function fetchCategories() {
    fetch("https://opentdb.com/api_category.php")
      .then((response) => {
        return response.json();
      })
      .then(({ trivia_categories }) => {
        if (trivia_categories.filter((item) => item.id === 0).length === 0) {
          console.log("Fetched categories");
          trivia_categories.push({ id: 0, name: "Any Category" });
        }
        setCategories(trivia_categories);
        setCurrCategory(trivia_categories[0]);
      });
  }

  function setCategory(e) {
    setCurrCategory(
      categories.filter((category) => category.id == e.target.value)[0]
    );
  }

  return (
    <div>
      {gameStarted ? (
        <Trivia category={currCategory} setGameStarted={setGameStarted} />
      ) : (
        <Home
          onClick={startGame}
          categories={categories}
          setCategory={setCategory}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
