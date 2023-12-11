import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Card() {
  const { state } = useLocation();
  const navigate = useNavigate()

  console.log(state);

  if (!state || !state.item){
    navigate("../ErrorPage");
    return null;
  }

  return (
    <>

        <section className="card">
          <img src={state.item.imageUrl} alt={state.item.title} />
          <h2>{state.item.title}</h2>
          <p>${state.item.price}</p>
          <p>Size: {state.item.size}</p>
        </section>
    </>
  );
}

export default Card;
