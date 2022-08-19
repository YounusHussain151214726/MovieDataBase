import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "./Context";
import Rating from "./Components/Rating";

const Detail = () => {
  const [curMovie, setCurMovie] = useState();
  const { id } = useParams();

  const { isError, isLoading, BASE_URL, setIsError, setIsLoading } =
    useGlobalContext();
  const API_URL = ` https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`;

  //backdrop_path

  useEffect(() => {
    specific();
  }, []);

  const specific = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setCurMovie(data);
    console.log(data);
    console.log(curMovie);
  };

  return (
    <section>
      <div className="subdetCon">
        <img
          className="movBack"
          src={`${BASE_URL}${curMovie ? curMovie.backdrop_path : ""}`}
        />
      </div>

      <div className="textone">
        <div className="dettit">{curMovie ? curMovie.original_title : ""}</div>{" "}
        <div>
          <span className="tagline">{curMovie ? curMovie.tagline : ""}</span>{" "}
        </div>
        <div className="detailrate">
          <span className="ratingD">
            {" "}
            <Rating rate={curMovie ? curMovie.vote_average : 5} />{" "}
          </span>
        </div>
        <div className="realsedate">
          <span className="status">
            Status : {curMovie ? curMovie.status : ""}{" "}
          </span>{" "}
          ({curMovie ? curMovie.release_date : ""})
        </div>
        <div className="genres">
          {" "}
          {curMovie && curMovie.genres
            ? curMovie.genres.map((gen) => (
                <>
                  <span className="gen" key={gen.id}>
                    {gen.name}
                  </span>
                </>
              ))
            : ""}
        </div>
        <div className="">
          <div className="detImg">
            <img
              className="posterDImg"
              src={`${BASE_URL}${curMovie ? curMovie.poster_path : ""} `}
              alt="Poster"
            />
          </div>
          <div className="texts">
            <div className="subtext">
              <div>
                <span className="overview">
                  {curMovie ? curMovie.overview : ""}
                </span>{" "}
              </div>
              <div>
                <span className="status">
                  {curMovie ? curMovie.status : ""}
                </span>{" "}
              </div>
            </div>
          </div>
          <div className="copyright">
            <h className="copyrighth">
              Designed & Developed By Younus @ All Right Reserved.
            </h>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
