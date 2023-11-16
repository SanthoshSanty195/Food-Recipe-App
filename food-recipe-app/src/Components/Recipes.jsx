import axios from "axios";
import { useState, useEffect } from "react";

function Recipes() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((response) => {
      console.log(response.data.categories);
      setCategories(response.data.categories)
    }).catch((error) => {
      console.error(error);
    });
  }, [])

  return (
    <>
      <div className="container mt-4" style={{background:"#3b8d99"}}>
        <h2 className="mb-4 d-flex justify-content-center">Meal Categories</h2>
        <div className="row">
          {categories.map((item) => (
            <div key={item.idCategory} className="col-md-4 mb-4">
              <div className="card">
                <img src={item.strCategoryThumb} className="card-img-top" alt={item.strCategory} />
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-center fw-bold">{item.strCategory}</h5>
                  <p className="card-text">{item.strCategoryDescription.substring(0,60)}.......</p>
                  <a href="#" className="btn btn-primary d-flex justify-content-center">Explore Recipes</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Recipes;