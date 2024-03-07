import { NavLink } from "react-router-dom";
import "./main.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const New = () => {
  const [info, setInfo] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    fetch(`https://books-server-7p9f.onrender.com/author_one/${id}`)
      .then((res) => res.json())
      .then((data) => setInfo(data))

      // .catch((error) => console.log(error));
      // console.log(info);
  }, []);

  return (
    <div className="new">
      <div className="container">
        <div className="new-inner">
        {/* {posts.length &&
            posts.map((item) => ( */}
              <div className="new-box">
              <div className="new-list">
                <NavLink className="new-link">
                  <img
                    className="new-img"
                    src={info.img}
                    alt="img"
                    width={582}
                    height={779}
                  />
                </NavLink>
                <li className="new-item-list">
                  <ul className="new-happy">
                    <h4 className="new-list-h4-1">{info.birthYear}</h4>
                  </ul>
                  <ul className="new-happy">
                    <h4 className="new-list-h4-2">{info.birthYear}</h4>
                  </ul>
                </li>
                <li className="new-item-list">
                  <ul className="new-happy">
                    <h2 className="new-list-h2">{info.createdAt}</h2>
                  </ul>
                  <ul className="new-happy">
                    <h2 className="new-list-h2"></h2>
                  </ul>
                </li>
              </div>
              <div className="new-text">
                <h1 className="new-h1">{info.birthYear}</h1>
                <p className="new-p">{info.creativity}</p>
                <h3 className="new-h3"></h3>
                <p className="new-item-p">{info.bio}</p>
              </div>
            </div>
            {/* ))} */}
        </div>
      </div>
    </div>
  );
};
