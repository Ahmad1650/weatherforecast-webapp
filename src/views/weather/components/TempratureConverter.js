import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CompareArrowsIcon from "@mui/icons-material/CompareArrowsOutlined";
import IconButton from "@mui/material/IconButton";
import { connect } from "react-redux";
import * as weatherActions from "../../../store/actions/Weather";

const TempratureConverter = (props) => {
  const { handleTempTypeChange, locationName } = props;
  const [tempType, setTempType] = useState("C");

  const setTempTypeHandler = (type) => {
    setTempType(type);
    handleTempTypeChange(type);
    props.loadLocationWeatherDetails(locationName, type);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Temprature Converter</h5>
        <small style={{ color: "red" }}>
          (Use optional parameter in api call to convert °C = metric and °F =
          imperial)
        </small>
        <Stack
          direction="row"
          spacing={2}
          className="d-flex justify-content-center mt-3"
        >
          <Button
            variant="contained"
            onClick={() => setTempTypeHandler("C")}
            disabled={tempType === "C"}
          >
            Celsius (°C)
          </Button>
          <IconButton aria-label="delete" disabled color="primary">
            <CompareArrowsIcon />
          </IconButton>
          <Button
            variant="contained"
            onClick={() => setTempTypeHandler("F")}
            disabled={tempType === "F"}
          >
            Fahrenheit (°F)
          </Button>
        </Stack>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapActionsToProps = {
  loadLocationWeatherDetails: weatherActions.GetTodayWeatherForecast,
};

export default connect(mapStateToProps, mapActionsToProps)(TempratureConverter);
