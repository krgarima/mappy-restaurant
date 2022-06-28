import React, { useContext, useEffect } from "react";
import { Navbar, Sidebar, Maps } from "../../Components/";
import { BookmarksContext } from "../../context/bookmarks-context";

const Bookmarks = () => {
  const { bookmarkedData, setBookmarkedData } = useContext(BookmarksContext);

  useEffect(() => {
    document.cookie = "bookmarks=" + JSON.stringify(bookmarkedData);
  }, [bookmarkedData]);

  return (
    <div className="home-page">
      <Navbar />
      <div className="container">
        <aside>
          <Sidebar />
        </aside>
        <aside className="home-container">
          {/* <Search /> */}
          <section className="all-maps">
            {bookmarkedData.map((restaurantData) => (
              <div className="map-container" key={restaurantData.id}>
                <Maps restaurantData={restaurantData} />
                <div className="btns-todo">
                  <button
                    onClick={() =>
                      setBookmarkedData(
                        bookmarkedData.filter(
                          (map) => map.id !== restaurantData.id
                        )
                      )
                    }
                  >
                    Remove from Bookmark
                  </button>
                </div>
              </div>
            ))}
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Bookmarks;
