import React, { useState, createContext } from "react";

const BookmarksContext = createContext();

const BookmarksContextProvider = ({ children }) => {
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
