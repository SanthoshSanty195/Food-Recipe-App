import axios from "axios";
import { useState, useEffect } from "react"
import './App.css';

function App() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((response) => {
      setCategories(response.data.categories)
    }).catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, [])


  return (
    <div className="App">
      <h1>Food Recipe App</h1>
      <div className="categories">
        {categories.map((category) => (
          <div key={category.idCategory} className="category">
            <h2>{category.strCategory}</h2>
            <img src={category.strCategoryThumb} alt={category.strCategory} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
