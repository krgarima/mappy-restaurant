import React, { useState, createContext } from "react";

const BookmarksContext = createContext();

const BookmarksContextProvider = ({ children }) => {
  const getCookies = (cookieName) => {
    let dataArray;
    let cookieArray = document.cookie.split(";");
    if (cookieArray !== 0) {
      for (let i = 0; i < cookieArray.length; i++) {
        dataArray = cookieArray[i].split("=");
        if (dataArray[0].trim() === cookieName) {
          return JSON.parse(dataArray[1]);
        } else return [];
      }
    }
  };
  const [bookmarkedData, setBookmarkedData] = useState(getCookies("bookmarks"));

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
