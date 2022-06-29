import React from "react";
import "./Maps.css";

const Maps = ({ restaurantData }) => {
  let source =
    `https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params={"ds2.name2":"` +
    restaurantData.fields.Name +
    `"}`;
  return (
    <div className="maps">
      <div className="link-location center">
        <h2>{restaurantData.fields.Name}</h2>
      </div>
      <iframe
        src={source}
        allowFullscreen=""
        title={restaurantData.fields.Name}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;
