import CategoryMenu from "./CategoryMenu";
import Title from "./Title";
import StartBtn from "./StartBtn";
import ErrorMsg from "./ErrorMsg";
import { useState, useEffect } from "react";

function Home({ setGameStarted, setCurrCategory }) {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
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
          //console.log("Fetched categories");
          trivia_categories.push({ id: 0, name: "Any Category" });
        }
        setCategories(trivia_categories);
        setCurrCategory(trivia_categories[0]);
      })
      .catch(() => setError(true));
  }

  function setCategory(e) {
    setCurrCategory(
      categories.filter((category) => category.id == e.target.value)[0]
    );
  }

  return (
    <>
      <Title />
      {error ? (
        <ErrorMsg />
      ) : (
        <>
          <CategoryMenu categories={categories} setCategory={setCategory} />
          <StartBtn onClick={startGame} />
        </>
      )}
    </>
  );
}

export default Home;
