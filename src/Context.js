import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const BASE_URL = `https://image.tmdb.org/t/p/w200`;
  const API_URL = ` https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;


  // const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

  const [Movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: "false", Message: "" });
  const [query, setQuery] = useState("titanic");
  

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      if (resJson.page === 1) {
        setIsLoading(false);
        setIsError({
          show: false,
          Message: "",
        });
        setMovie(resJson.results);
      } else {
        setIsError({
          show: true,
          Message: resJson.Error,
        }); 
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(API_URL);
  },[]);


  return (
    <AppContext.Provider
      value={{ isError, isLoading, Movie, query, setQuery, BASE_URL ,setIsError ,setIsLoading}}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
