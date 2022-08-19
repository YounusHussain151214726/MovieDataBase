import React from "react";
import { useGlobalContext } from "./Context";

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();
console.log(isError)
  return (
    <>
      <section>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
            />
          </div>
        </form>
        <div><p>{isError.show && isError.Message}</p></div>
      </section>
    </>
  );
};

export default Search;
