import CategoryMenu from "./CategoryMenu";
import Title from "./Title";
import StartBtn from "./StartBtn";



function Home({onClick, categories, setCategory}) {
  return (
    <>
      <Title />
      <CategoryMenu categories={categories} setCategory={setCategory} />
      <StartBtn onClick={onClick}/>
    </>
  );
}

export default Home;
