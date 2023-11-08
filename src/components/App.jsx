import Footer from './Footer'
import Home from './Home'
import Trivia from './Trivia'
import {useEffect, useState } from 'react';
import './App.css'




function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories()
  }, []);

  function startGame(){
    setGameStarted(true);
  };

  function fetchCategories() {
    fetch("https://opentdb.com/api_category.php")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setCategories(data.trivia_categories)
      })
  };

  categories.push({id:0, name:'Any Category'});

  return (
    <div>
      {gameStarted ? <Trivia /> : <Home onClick={startGame} categories={categories} />}
      <Footer />
    </div>
  );
}

export default App;
