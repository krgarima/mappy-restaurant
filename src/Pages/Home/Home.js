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

  // let a = JSON.parse(mapData);
  console.log(Array.from(mapData));

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
            {/* {mapData.map((restaurantData) => (
              <div className="map-container" key={restaurantData.id}>
                <Maps restaurantData={restaurantData} />

                <div className="btns-todo">
                  <button
                    onClick={() => {
                      setMapData(
                        mapData.filter((map) => map.id !== restaurantData.id)
                      );
                      // changeCookiesMap();
                    }}
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => {
                      setBookmarkedData([...bookmarkedData, restaurantData]);
                      setMapData(
                        mapData.filter((map) => map.id !== restaurantData.id)
                      );
                      // changeCookiesBookmarks();
                    }}
                  >
                    Bookmark
                  </button>
                </div>
              </div>
            ))} */}
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Home;
