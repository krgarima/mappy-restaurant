import React, { useContext } from "react";
import { Navbar, Sidebar, Search, Maps } from "../../Components/";
import { MapContext } from "../../context/map-context";
import { BookmarksContext } from "../../context/bookmarks-context";
import "./Home.css";

const Home = () => {
  const { mapData, setMapData } = useContext(MapContext);
  const { bookmarkedData, setBookmarkedData } = useContext(BookmarksContext);

  // const changeCookiesMap = () => {
  //   document.cookie = "mapData=" + JSON.stringify(mapData);
  // };
  // const changeCookiesBookmarks = () => {
  //   document.cookie = "bookmarks=" + JSON.stringify(bookmarkedData);
  // };

  const data = JSON.parse(localStorage.getItem("mapData"));
  console.log(mapData);
  // console.log(Array(data));

  return (
    <div className="home-page">
      <Navbar />
      <div className="container">
        <aside>
          <Sidebar />
        </aside>
        <aside className="home-container">
          <Search />
          <section className="all-maps">
            {data ? (
              data.map((restaurantData) => (
                <div className="map-container" key={restaurantData.id}>
                  <Maps restaurantData={restaurantData} />

                  <div className="btns-todo">
                    <button
                      onClick={() => {
                        const removeData = data.filter(
                          (map) => map.id !== restaurantData.id
                        );
                        setMapData(removeData);
                        localStorage.setItem(
                          "mapData",
                          JSON.stringify(removeData)
                        );
                        // changeCookiesMap();
                      }}
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => {
                        const removeData = data.filter(
                          (map) => map.id !== restaurantData.id
                        );
                        setMapData(removeData);
                        localStorage.setItem(
                          "mapData",
                          JSON.stringify(removeData)
                        );

                        setBookmarkedData([...bookmarkedData, restaurantData]);
                        localStorage.setItem(
                          "bookmarks",
                          JSON.stringify([...bookmarkedData, restaurantData])
                        );

                        // changeCookiesBookmarks();
                      }}
                    >
                      Bookmark
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h1>No records found</h1>
            )}
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Home;
