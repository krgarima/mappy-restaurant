import React, { useState, createContext } from "react";

const MapContext = createContext();

const MapContextProvider = ({ children }) => {
  const getCookies = (cookieName) => {
    let dataArray;
    let cookieArray = document.cookie.split(";");
    if (cookieArray !== 0) {
      for (let i = 0; i < cookieArray.length; i++) {
        dataArray = cookieArray[i].split("=");
        if (dataArray[0] === " " + cookieName) {
          return dataArray[1];
        } else return [];
      }
    }
  };
  const [mapData, setMapData] = useState(getCookies("mapData"));

  // const mapCookies = getCookies("mapData");
  // const getData = () => {
  //   if (localStorage.getItem("mapData") !== "undefined")
  //     return localStorage.getItem("mapData");
  //   else return [];
  // };

  // console.log(getCookies("mapData"));

  return (
    <div>
      <MapContext.Provider
        value={{
          mapData,
          setMapData,
        }}
      >
        {children}
      </MapContext.Provider>
    </div>
  );
};

export { MapContext, MapContextProvider };
