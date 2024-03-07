import "./main.css";

import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export const Single = () => {


  const {id} = useParams
  const [singleData, setsingleData] = useState([])
console.log(singleData);

useEffect(() => {
  fetch(`https://books-server-7p9f.onrender.com/authors`)
  .then((res) => res.json())
  .then((data) => setsingleData(data))
},[])


  return (
      <div classNafetchme="container">
        <div className="single-inner">
          <img src={setsingleData.img} alt="img" className="single-img" />
          <h2 className="single-title">{}</h2>
          <p className="single-text"></p>
          <div className="single-bottom">
            <p className="single-date"></p>
          </div>
        </div>
      </div>
  );
};
