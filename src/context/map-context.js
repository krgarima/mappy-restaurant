import React, { useState, createContext } from "react";

const MapContext = createContext();

const MapContextProvider = ({ children }) => {
  // let maps =
  //   document.cookie.length > 0
  //     ? JSON.parse(document.cookie.split(";")[0].split("=")[1])
  //     : false;
  // let maps = JSON.stringify(document.cookie.split(";")[0].split("=")[1]);
  // console.log(maps);
  const [mapData, setMapData] = useState([]);

  console.log(document.cookie);

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
