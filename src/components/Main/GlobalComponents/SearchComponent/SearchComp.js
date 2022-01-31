import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchC.css";
import ItemCard from "../../../Shop/item-card/ItemCard";

function SearchComp() {
  // OPEN-CLOSE SEARCH BAR
  const [buttonState, setButtonState] = useState("bar-closed");
  const toggleSearchBar = () => {
    if (buttonState == "bar-closed") {
      setButtonState("bar-opened");
    } else if (buttonState == "bar-opened") {
      setButtonState("bar-closed");
    }
  };
  // CLOTHING DATA STATES
  const [clothing, setClothing] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  // FETCH DATA
  useEffect(() => {
    // fetching items using an async function
    const fetchClothes = async () => {
      setLoading(true);
      const response = await fetch(
        "https://h-and-m-api.herokuapp.com/clothing"
      );
      const resp = await response.json();
      console.log(`THIS IS THE RESP ${resp}`)
      let filteredClothing = resp.filter(item => item.title.toLowerCase().includes(query))
      setClothing(filteredClothing);
      setLoading(false);
    };
    fetchClothes();
  }, [query]);
  console.log(clothing)
  return (
    <>
      {/* <img src={require("../../../img/icons8-search.svg").default} /> */}
      <div className="search-page">
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="search..."
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <FontAwesomeIcon icon={faSearch} onClick={toggleSearchBar} />
        </div>
        <div className="result-container">
    
              {/* currentItemInd */}
              {clothing.map((e) => (
                <ItemCard
                  id={e.id}
                  imageA={e.imageA}
                  imageB={e.imageB}
                  title={e.title}
                  price={e.price}
                  swatches={e.swatches}
                />
              ))}
        </div>
      </div>
    </>
  );
}

export default SearchComp;
