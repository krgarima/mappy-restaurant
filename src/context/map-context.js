import React, { useState, createContext } from "react";

const MapContext = createContext();

const MapContextProvider = ({ children }) => {
  const [mapData, setMapData] = useState([]);

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
