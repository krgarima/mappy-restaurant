import React, { useState, createContext } from "react";

const BookmarksContext = createContext();

const BookmarksContextProvider = ({ children }) => {
  // let bookmarks =
  //   document.cookie.length > 1
  //     ? JSON.parse(document.cookie.split(";")[1].split("=")[1])
  //     : false;
  // let bookmarks = JSON.stringify(document.cookie.split(";")[2].split("=")[1]);
  const [bookmarkedData, setBookmarkedData] = useState([]);

  return (
    <div>
      <BookmarksContext.Provider
        value={{
          bookmarkedData,
          setBookmarkedData,
        }}
      >
        {children}
      </BookmarksContext.Provider>
    </div>
  );
};

export { BookmarksContext, BookmarksContextProvider };
