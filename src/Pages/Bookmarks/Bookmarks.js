import React, { useContext } from "react";
import { Navbar, Sidebar, Maps } from "../../Components/";
import { BookmarksContext } from "../../context/bookmarks-context";

const Bookmarks = () => {
  const { setBookmarkedData } = useContext(BookmarksContext);

  const getCookies = (cookieName) => {
    let cookieArray = document.cookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
      if (cookieArray[i].split("=")[0].trim() === cookieName) {
        return JSON.parse(cookieArray[i].split("=")[1]);
      }
    }
  };

  const data = getCookies("bookmarks");

  return (
    <div className="home-page">
      <Navbar />
      <div className="container">
        <aside>
          <Sidebar />
        </aside>
        <aside className="home-container  bookmark">
          {/* <Search /> */}
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
                        setBookmarkedData(removeData);
                        document.cookie =
                          "bookmarks=" + JSON.stringify(removeData);
                      }}
                    >
                      Remove from Bookmark
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h1>No record found</h1>
            )}
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Bookmarks;
