import CategoryMenu from "./CategoryMenu";
import Title from "./Title";
import StartBtn from "./StartBtn";



function Home({onClick, categories}) {
  return (
    <>
      <Title />
      <CategoryMenu categories={categories} />
      <StartBtn onClick={onClick}/>
    </>
  );
}

export default Home;
