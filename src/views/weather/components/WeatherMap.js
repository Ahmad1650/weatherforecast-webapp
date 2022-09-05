import React from "react";
import MapComponent from "./Map";

const WeatherMap = () => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title text-center">Weather Map</h5>
        <MapComponent />
      </div>
    </div>
  );
};
export default WeatherMap;
