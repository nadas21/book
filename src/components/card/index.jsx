import "./main.css";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Head } from "../head";

export const Card = () => {
  const [pageCount, setPAgecount] = useState(2);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    fetch(`https://books-server-7p9f.onrender.com/authors`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="card">
      <div className="container">
        <Head></Head>
        <div className="card-inner">
          <nav className="nav">
            <h2 className="nav-h2">Asosiy kategoriyalar</h2>
            <ul className="nav-list">
              <li className="nav-list-item">
                <NavLink to={"/jadid"} className="nav-link">
                  Jadid adabiyoti
                </NavLink>
              </li>
              <li className="nav-list-item">
                <li className="nav-list-item">
                  <NavLink to={"/sovet"} className="nav-link">
                    {" "}
                    Sovet davri
                  </NavLink>
                </li>
              </li>
            </ul>
          </nav>
          <div className="news-card">
          {posts.length && (
          posts
          .filter((val) => search.toLowerCase() === ""
          ? val :  val.title.includes(search)
          )
          .map((item) => (
              
            <ul className="news-list">
              <li className="news-item">
                <img
                  src={item.img}
                  alt="img"
                  className="news-img"
                  width={100}
                  height={232}
                />
                <div className="card-box">
                  <h4 className="card-title">{item.fullName}</h4>
                  <p className="card-text">{item.birthYear}</p>
                  <div className="card-bottom">
                    <p className="card-time"></p>
                    <NavLink to={`/btn/${item.id}`}>
                      <button className="card-btn">ko'proq</button>
                    </NavLink>
                  </div>
                </div>
              </li>
            </ul>
          )
        ))
        }
            </div>
            </div>
      </div>
    </div>
  );
};
