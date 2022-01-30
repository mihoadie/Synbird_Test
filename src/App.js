import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { getRecipesAsync } from "./features/counter/counterSlice";
import Recipe from "./components/Recipe";
import Cart from "./components/Cart";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.counter.recipes);
  const [recipesDisplay, setRecipesDisplay] = useState([]);

  useEffect(() => {
    dispatch(getRecipesAsync());
  }, []);

  if (!recipes || recipes === undefined || recipes === null) {
    return <div>...is loading</div>;
  }

  return (
    <div className="App">
      <Counter />
      <br />
      <br />
      {recipes?.map((recipe, index) => (
        <>
          {recipe.map((details, index) => (
            <div key={index}> {JSON.stringify(details)} </div>
          ))}
          <br />
          <br />
        </>
      ))}
      <br />
      <div>CHOOSE RECIPE / ACCESS TO CART</div>
      <br />

      <Recipe listRecipes={recipes} />
      <br />
      <br />
      <Cart />
    </div>
  );
}

export default App;
