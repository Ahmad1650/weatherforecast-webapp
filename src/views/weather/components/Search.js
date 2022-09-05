import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { connect } from "react-redux";
import * as weatherActions from "../../../store/actions/Weather";

const locations = [
  { label: "Islamabad" },
  { label: "Lahore" },
  { label: "Karachi" },
  { label: "Wah Cantt" },
  { label: "Rawalpindi" },
];

const Search = (props) => {
  const [locationName, setLocationName] = React.useState("");
  const { loadLocationWeatherDetails, tempType, handleLocationName } = props;

  const handleLocationChange = (e) => {
    const { value } = e.target;
    setLocationName(value);
  };

  const handleLocationSearch = (e) => {
    if (e.key === "Enter") {
      loadLocationWeatherDetails(locationName, tempType);
      handleLocationName(locationName);
    }
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={locations}
      sx={{ width: "100%" }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Write city name then press enter button"
          onChange={(e) => handleLocationChange(e)}
          onSelect={(e) => handleLocationChange(e)}
          onKeyDown={(e) => handleLocationSearch(e)}
        />
      )}
    />
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapActionsToProps = {
  loadLocationWeatherDetails: weatherActions.GetTodayWeatherForecast,
};

export default connect(mapStateToProps, mapActionsToProps)(Search);
