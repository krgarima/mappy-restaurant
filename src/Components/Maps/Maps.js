import React from "react";
import "./Maps.css";

const Maps = ({ restaurantData }) => {
  return (
    <div className="maps">
      <iframe
        // src="https://datastudio.google.com/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params=ds2.name:Subway"
        // src={`https://datastudio.google.com/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params={"ds2.name2":${restaurantData.fields.Name}}`}
        src={`https://datastudio.google.com/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params={"ds2.name2":"Subway"}`}
        // width="600"
        // height="450"
        // style="border:0;"
        // allowfullscreen=""
        title={restaurantData.fields.Name}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;
