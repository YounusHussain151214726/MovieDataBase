import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./Context";
import Loading from "./Components/Loading";
import Rating from "./Components/Rating";

const Movie = () => {
  const { Movie, isLoading, isError, BASE_URL } = useGlobalContext();

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <>
      <div className="headingdiv">
        {" "}
        <h className="heading">Popular</h>
      </div>

      <div className="Container">
        <div className="subContainer">
          {Movie.map((curMovi) => {
            const { poster_path, title, id, vote_average, release_date } =
              curMovi;
            const modifytitle = title.substring(0, 10);
            return (
              <NavLink to={`movie/${id}`} key={id}>
                <div className="main">
                  {" "}
                  <div className="poster">
                    <img
                      className="posterImg"
                      src={`${BASE_URL}${poster_path} `}
                      alt="Poster"
                    />
                  </div>
                  <span className="rating">
                    {" "}
                    <Rating rate={vote_average} />{" "}
                  </span>
                  <div className="title">
                    {modifytitle.length >= 10
                      ? `${modifytitle}...`
                      : modifytitle}
                  </div>
                  <div className="realse">{release_date}</div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Movie;
