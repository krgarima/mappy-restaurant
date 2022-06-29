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
    localStorage.setItem("mapData", JSON.stringify(mapData));
  }, [mapData]);

  // const addToCookies = () => {
  // let prevCookie = mapData.map((co) => JSON.stringify(co));
  // let newCookie = [...prevCookie, JSON.stringify(restaurant)];
  // document.cookie = ["mapData=", newCookie].join("");
  // console.log(prevCookie);
  // document.cookie = "mapData=" + JSON.stringify(mapData);
  // console.log(prevCookie);
  // };

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

  const handleAddToMaps = (restaurants) => {
    setMapData([...mapData, restaurants]);
    // addToCookies(restaurants);
    setDataSuggestions([]);
    setShowSuggestions(false);
    // setInputSearch("");
  };

  return (
    <div className="search-container searchArea large-search center">
      <div className="search">
        <input
          // value={inputSearch}
          onChange={handleChange}
          placeholder="Search for Restaurants"
        />
        {showSuggestions ? (
          <div className="suggestions">
            {dataSuggestions?.map((restaurants) => (
              <p
                key={restaurants.id}
                className="suggested-restaurant"
                onClick={() => handleAddToMaps(restaurants)}
              >
                {restaurants.fields.Name}
              </p>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Search;
