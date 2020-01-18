import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div>
      <div className="field has-addons">
        <p className="control">
          <button  className="button is-static is-medium">Search...</button>
        </p>
        <p class="control">
          <input
            className={`input is-medium ${styles["input-control"]}`}
            type="text"
            placeholder="burgers, spas, handymen"
          />
        </p>
        <p className="control">
          <button className="button is-static is-medium">NEAR</button>
        </p>
        <p className="control">
          <input
            className={`input is-medium ${styles["input-control"]}`}
            type="text"
            placeholder="Where"
          />
        </p>
        <button className={`button is-medium ${styles['search-button']}`}>
          <span className="icon is-small">
            <i className="fas fa-search"></i>
          </span>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
