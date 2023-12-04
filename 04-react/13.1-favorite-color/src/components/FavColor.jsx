import React, { useEffect, useState } from "react";
import './FavColor.css'

function FavColor() {
  const [favoriteColor, setFavoriteColor] = useState("blue");

  useEffect(() => {

    setTimeout(() => {
      setFavoriteColor("green");
    }, 1000);

  }, []);

  return (
    <main>
      <h1>My favortie colos is {favoriteColor}</h1>
      <div id="color-div" className={favoriteColor}></div>
    </main>
  );
}

export default FavColor;
