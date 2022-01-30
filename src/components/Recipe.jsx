import { useEffect, useState } from "react";

import "../App.css";

import { useDispatch, useSelector } from "react-redux";
import { addCartQuantity } from "../features/cartSlice";

function Recipe(props) {
  const RecipesList = props.listRecipes;
  const [selection, setSelection] = useState();
  const [guests, setGuests] = useState(4);
  const dispatch = useDispatch();
  useEffect(function () {}, []);
  function set(ing) {
    const count = parseInt((parseInt(ing.quantity) * parseInt(guests)) / 4);
    const final = { ...ing, quantity: count, id: Date.now().toString() };
    return final;
  }
  function results() {
    const result = RecipesList?.find((rec) => rec[0] === selection);
    return result;
  }
  function globalPush() {
    const base = results();
    base.forEach((elem, index) => {
      if (elem.quantity) {
        const count = parseInt(
          (parseInt(elem.quantity) * parseInt(guests)) / 4
        );
        const final = {
          ...elem,
          quantity: count,
          id: Date.now().toString() + index,
        };
        dispatch(addCartQuantity(final));
      }
    });
  }

  return (
    <div>
      {RecipesList && (
        <select
          value={selection}
          id="SelectBox"
          onChange={(e) => setSelection(e.target.value)}
        >
          <option>select</option>
          {RecipesList.map((rec, _index) => (
            <option key={_index}>{rec[0]}</option>
          ))}
        </select>
      )}
      <div>Nb of guests</div>
      <input
        type="number"
        min="0"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      ></input>

      {results()?.map(
        (ing, index) =>
          ing.quantity && (
            <>
              <div key={index}>
                {ing.ingredient} - unit: {ing.unit} - quantité:{" "}
                {parseInt((parseInt(ing.quantity) * parseInt(guests)) / 4)}
              </div>
              <button onClick={() => dispatch(addCartQuantity(set(ing)))}>
                Add {ing.ingredient} to Cart
              </button>
            </>
          )
      )}
      <br />
      {selection !== undefined && (
        <button onClick={() => globalPush()}>push complete list to Cart</button>
      )}
    </div>
  );
}

export default Recipe;
