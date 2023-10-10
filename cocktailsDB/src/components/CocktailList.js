import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  let { isLoading, cocktails } = useGlobalContext();
  if (isLoading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2>No cocktails matching your search criteria</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((cocktail) => (
          <Cocktail dets={cocktail} key={cocktail.id} />
        ))}
      </div>
    </section>
  );
};

export default CocktailList;
