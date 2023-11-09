
function createCategories(category){
    return <option key={category.id} value={category.id}>{category.name}</option>
}

function Categories({categories,setCategory}) {
  return (
    <div>
      <p className='instructions'>Choose a category</p>
      <select name="categories" id="categories" onChange={setCategory}>
      {categories.map(createCategories)}
      </select>
    </div>
  );
}

export default Categories;
