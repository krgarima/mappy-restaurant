import React, { useEffect, useState, useContext } from "react";
import { MapContext } from "../../context/map-context";
import axios from "axios";
import "./Search.css";

const Search = () => {
  // const [inputSearch, setInputSearch] = useState("");
  const [restaurantData, setRestaurantData] = useState();
  const [dataSuggestions, setDataSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { mapData, setMapData } = useContext(MapContext);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants?maxRecords=50&view=Grid%20view`,
          {
            headers: {
              authorization: "Bearer keyfXgn8PL6pB3x32",
            },
          }
        );
        setRestaurantData(data.records);
      } catch (error) {
        console.log("Please refresh! Some error has occured.");
      }
    })();
  }, []);

  const handleChange = (e) => {
    setShowSuggestions(true);
    setDataSuggestions(
      restaurantData?.filter((restaurant) =>
        restaurant.fields.Name.toLowerCase().match(e.target.value.toLowerCase())
      )
    );
    if (e.target.value?.length === 0) {
      setDataSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const debounce = (func, delay) => {
    let timerId = null;
    return (...args) => {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => func(...args), delay);
    };
  };

  const debounceData = debounce(handleChange, 500);

  const handleAddToMaps = (restaurants) => {
    setMapData([...mapData, restaurants]);
    setDataSuggestions([]);
    setShowSuggestions(false);
    document.cookie = "mapData=" + JSON.stringify([...mapData, restaurants]);
  };

  return (
    <div className="search-container searchArea large-search center">
      <div className="search">
        <input
          // value={inputSearch}
          onChange={debounceData}
          placeholder="Search for Restaurants"
        />
        {showSuggestions ? (
          <div className="suggestions">
            {dataSuggestions?.length > 0 ? (
              dataSuggestions?.map((restaurants) => (
                <p
                  key={restaurants.id}
                  className="suggested-restaurant"
                  onClick={() => handleAddToMaps(restaurants)}
                >
                  {restaurants.fields.Name}
                </p>
              ))
            ) : (
              <p className="suggested-restaurant">No data found</p>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Search;
