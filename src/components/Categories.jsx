const categories = [{
    id: 1,
    name: 'General knowledge'
  },
  {
    id: 2,
    name: 'Mythology'
  },
  {
    id: 3,
    name: 'Science'
  },
  {
    id: 4,
    name: 'Math'
  },
  {
    id: 5,
    name: 'Entertainment: Japanese Anime & Manga'
  },
  {
    id: 6,
    name: 'Culture'
  }];


function createCategories(category){
    return <option value={category.id}>{category.name}</option>
}

function Categories() {

  return (
    <div>
      <p className='instructions'>Choose a category</p>
      <select name="categories" id="categories">
      {categories.map(createCategories)}
      </select>
    </div>
  );
}

export default Categories;
