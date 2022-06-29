import React, { useState, createContext } from "react";

const MapContext = createContext();

// function getCookies(cookieName) {
//   let dataArray;
//   let cookieArray = document.cookie.split(";");
//   if (cookieArray !== 0) {
//     for (let i = 0; i < cookieArray.length; i++) {
//       dataArray = cookieArray[i].split("=");
//       if (dataArray[0] === " " + cookieName) {
//         return dataArray[1];
//       }
//     }
//   }
// }

const MapContextProvider = ({ children }) => {
  // const mapCookies = getCookies("mapData");
  const getData = () => {
    if (localStorage.getItem("mapData") !== null)
      return localStorage.getItem("mapData");
    else return [];
  };
  const [mapData, setMapData] = useState(getData());
  console.log(mapData);

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
