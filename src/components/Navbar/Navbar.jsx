import React from "react";
import { FaUser, FaSearch } from "react-icons/fa";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar flex-nav">
        <div className="nav-left flex-al-center ">NavBar</div>
        <div className="nav-middle flex-al-center">
          <form className="search-bar-center-desktop flex-al-center m-right-small">
            <input
              className="flex-al-center"
              placeholder="Search for Videos Here"
            />
            <button className="flex-al-center" type="submit">
              <FaSearch className="nav-icons flex" />
            </button>
          </form>
        </div>
        <div className="nav-right flex-al-center">
          <button
            type="submit"
            className="flex search-symbol-mobile border-none m-right-small"
            href="#"
          >
            <FaSearch className="icon-svg" />
          </button>
          
        </div>
      </nav>
    </>
  );
};
