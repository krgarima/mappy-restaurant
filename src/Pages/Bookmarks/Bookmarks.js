import React, { useContext } from "react";
import { Navbar, Sidebar, Maps } from "../../Components/";
import { BookmarksContext } from "../../context/bookmarks-context";

const Bookmarks = () => {
  const { bookmarkedData, setBookmarkedData } = useContext(BookmarksContext);

  //   const changeCookiesBookmarks = () => {
  //     document.cookie = "bookmarks=" + JSON.stringify(bookmarkedData);
  //   };

  const data = JSON.parse(localStorage.getItem("bookmarks"));

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
                        localStorage.setItem(
                          "bookmarks",
                          JSON.stringify(removeData)
                        );
                        // changeCookiesBookmarks();
                      }}
                    >
                      Remove from Bookmark
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h1>NO record found</h1>
            )}
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Bookmarks;
