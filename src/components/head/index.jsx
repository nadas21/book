import "./main.css";
import React, { useState } from "react";



export const Head = () => {


  
  const [search, setSearch] = useState('');
console.log(search);

  return (
    <div className="head">
      <div className="container">
        <div className="head-inner">
              <div className="head-link"></div>
            <div className="head-box">
            <h2 className="head-h2">
                QIDIRISH
            </h2>
           <div className="head-list">
           <input type="text" placeholder="Adiblar, kitoblar, audiolar, maqolalar..." className="head-input"
         value={search}
         onChange={(e) => setSearch(e.target.value)}
                //  value={search}
                //  onChange={(e) => setSearch(e.target.value)}
             />
            <button className="head-btn"> Izlash</button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};