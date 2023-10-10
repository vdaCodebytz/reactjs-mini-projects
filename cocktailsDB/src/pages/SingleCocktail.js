import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  let { isLoading, setIsLoading } = useGlobalContext();
  let { id } = useParams();
  let [cocktailData, setCocktailData] = useState({});

  const fetchCocktails = async () => {
    setIsLoading(true);
    try {
      let response = await fetch(`${url}${id}`);
      let { drinks } = await response.json();

      setCocktailData(drinks[0]);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, []);
  let ingredients = [];
  for (let key in cocktailData) {
    if (key.includes("strIngredient") && cocktailData[key]) {
      ingredients.push(`${cocktailData[key]} , `);
    }
  }
  let {
    idDrink,
    strDrink,
    strAlcoholic,
    strGlass,
    strDrinkThumb,
    strCategory,
    strInstructions,
  } = cocktailData;

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="cocktail-section">
      <div className="drink">
        <img src={strDrinkThumb} alt={strDrink} />
        <div>
          <h3 className="drink-info">
            <span className="drink-data">Name:</span>
            {strDrink}
          </h3>
          <h3 className="drink-info">
            <span className="drink-data">Category:</span>
            {strCategory}
          </h3>
          <h3 className="drink-info">
            <span className="drink-data">Info:</span>
            {strAlcoholic}
          </h3>
          <h3 className="drink-info">
            <span className="drink-data">Glass:</span>
            {strGlass}
          </h3>
          <h3 className="drink-info">
            <span className="drink-data">Ingredients:</span>
            {ingredients}
          </h3>
          <h3 className="drink-info">
            <span className="drink-data">Instructions:</span>
            {strInstructions}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
