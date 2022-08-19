import React from "react";

const Navbar = () => {
  return (
    <section>
      <div className="Nav">
        <a href="/">
          <img
            className="navlogo"
            src="https://1000logos.net/wp-content/uploads/2020/08/Imdb-logo-700x353.png"
            alt="Logo"
          />
        </a>

        <div>
          <h className="navtit">Latest</h>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
