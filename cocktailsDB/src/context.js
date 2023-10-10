import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  let [isLoading, setIsLoading] = useState(true);
  let [searchTerm, setSearchTerm] = useState("a");
  let [cocktails, setCocktails] = useState([]);

  const fetchCocktails = async () => {
    setIsLoading(true);
    try {
      let response = await fetch(`${url}${searchTerm}`);
      let { drinks } = await response.json();
      if (drinks) {
        let drinksWithData = drinks.map((drink) => {
          let { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } =
            drink;
          return {
            id: idDrink,
            name: strDrink,
            alcoholic: strAlcoholic,
            glass: strGlass,
            img: strDrinkThumb,
          };
        });
        setCocktails(drinksWithData);
      } else {
        setCocktails([]);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, [searchTerm]);
  return (
    <AppContext.Provider
      value={{ isLoading, cocktails, setSearchTerm, setIsLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
