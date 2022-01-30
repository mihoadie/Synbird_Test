import { useEffect, useState } from "react";
import { deleteCartElement } from "../features/cartSlice";
import "../App.css";

import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const [cart, setCart] = useState();
  const [complete, SetComplete] = useState();
  const shoppingList = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <br />
      <br />
      <div>PERSONAL CART </div>
      <br />
      <div>global cart overview</div>
      {!shoppingList.length > 0 && <div>No articles in your shopping list</div>}
      {shoppingList.length > 0 && <div>{JSON.stringify(shoppingList)}</div>}
      <br />
      {shoppingList.length > 0 && <div>in details</div>}
      {shoppingList.map((ing, index) => (
        <>
          <div key={ing.id}>
            {JSON.stringify(ing.ingredient)} - {JSON.stringify(ing.quantity)}{" "}
            {JSON.stringify(ing.unit)}{" "}
          </div>
          <button onClick={() => dispatch(deleteCartElement(ing))}>
            Delete {ing.ingredient}
          </button>
          <br />
        </>
      ))}
    </>
  );
}
export default Cart;
