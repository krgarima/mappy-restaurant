import React, { useContext } from "react";
import { Navbar, Sidebar, Search, Maps } from "../../Components/";
import { MapContext } from "../../context/map-context";
import { BookmarksContext } from "../../context/bookmarks-context";
import "./Home.css";

const Home = () => {
  const { setMapData } = useContext(MapContext);
  const { bookmarkedData, setBookmarkedData } = useContext(BookmarksContext);

  const getCookies = (cookieName) => {
    let cookieArray = document.cookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
      if (cookieArray[i].split("=")[0].trim() === cookieName) {
        return JSON.parse(cookieArray[i].split("=")[1]);
      }
    }
  };

  const data = getCookies("mapData");

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
                        document.cookie =
                          "mapData=" + JSON.stringify(removeData);
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
                        document.cookie =
                          "mapData=" + JSON.stringify(removeData);
                        setBookmarkedData([...bookmarkedData, restaurantData]);

                        document.cookie =
                          "bookmarks=" +
                          JSON.stringify([...bookmarkedData, restaurantData]);
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
