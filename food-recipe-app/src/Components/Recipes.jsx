import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Recipes() {
  const [categories, setCategories] = useState([]);
  const navi = useNavigate();

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((response) => {
      console.log(response.data.categories);
      setCategories(response.data.categories)
    }).catch((error) => {
      console.error(error);
    });
  }, [])

  const handleExploreClick = (idCategory) => {
    if (idCategory === "1") {
      window.location.href = "https://www.themealdb.com/browse/search/?s=Beef";
    } else if(idCategory === "2"){
      window.location.href = "https://www.themealdb.com/browse/search/?s=Chicken";
    }else if(idCategory === "3"){
      window.location.href = "https://www.themealdb.com/browse/search/?s=brownie";
    }else if(idCategory === "4"){
      window.location.href = "https://www.themealdb.com/browse/search/?s=lamb";
    }else if(idCategory === "5"){
      window.location.href = "https://www.themealdb.com/browse/letter/e";
    }else if(idCategory === "6"){
      window.location.href = "https://www.themealdb.com/browse/search/?s=pasta";
    }else if(idCategory === "7"){
      window.location.href = "https://www.themealdb.com/browse/search/?s=pork";
    }else if(idCategory === "8"){
      window.location.href = "https://www.themealdb.com/browse/search/?s=fish";
    }else if(idCategory === "9"){
      window.location.href = "https://www.themealdb.com/browse/letter/s";
    }else if(idCategory === "10"){
      window.location.href = "https://www.themealdb.com/browse/search/?s=Chicken";
    }else if(idCategory === "11"){
      window.location.href = "https://www.themealdb.com/browse/search/?s=vegan";
    }else if(idCategory === "12"){
      window.location.href = "https://www.themealdb.com/browse/search/?s=vegetarian";
    }else if(idCategory === "13"){
      window.location.href = "https://www.themealdb.com/browse/search/?s=breakfast";
    }else if(idCategory === "14"){
      window.location.href = "https://www.themealdb.com/browse/search/?s=goat";
    }else {
      navi(`/recipes/${idCategory}`);
    }
  };

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
                  <div onClick={()=>handleExploreClick(item.idCategory)} className="btn btn-primary d-flex justify-content-center">Explore Recipes</div>
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