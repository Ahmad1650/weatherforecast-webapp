import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { autoPlay } from "react-swipeable-views-utils";
import { connect } from "react-redux";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const WeatherForecast = (props) => {
  const theme = useTheme();
  const { tempType } = props;
  const { weatherForecast } = props.weather;

  //set and check step of weekly cards
  const maxSteps =
    weatherForecast && weatherForecast.list && weatherForecast.list.length !== 0
      ? weatherForecast.list.length
      : 0;
  //set and check active step
  const checkActiveStateData =
    weatherForecast && weatherForecast.list && weatherForecast.list.length !== 0
      ? weatherForecast.list[0]
      : 0;
  const [activeStep, setActiveStep] = React.useState(checkActiveStateData);
  // getting icon code
  const currentWeatherForecastIcon =
    weatherForecast &&
    weatherForecast.list &&
    weatherForecast.list[0] &&
    weatherForecast.list[0].weather[0] &&
    weatherForecast.list[0].weather[0].icon;
  // getting url of current icon
  const currentWeatherForecastIconURL =
    "http://openweathermap.org/img/w/" + currentWeatherForecastIcon + ".png";
  // convert value into hours
  const todayDate = new Date(
    weatherForecast &&
      weatherForecast.list &&
      weatherForecast.list[0] &&
      weatherForecast.list[0].dt * 1000
  );
  // convert value into hours
  const sunrise = new Date(
    weatherForecast &&
      weatherForecast.city &&
      weatherForecast.city.sunrise * 1000
  );
  // convert value into hours
  const sunset = new Date(
    weatherForecast &&
      weatherForecast.city &&
      weatherForecast.city.sunset * 1000
  );

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">
            Today's ({todayDate.toDateString()}) weather for{" "}
            {weatherForecast &&
              weatherForecast.city &&
              weatherForecast.city.name}{" "}
            {weatherForecast &&
              weatherForecast.city &&
              weatherForecast.city.country}
          </h5>
          <div className="row mb-1">
            <div className="col-md-6">
              <p className="card-text">
                Current Temprature:{" "}
                {weatherForecast &&
                  weatherForecast.list &&
                  weatherForecast.list[0] &&
                  weatherForecast.list[0].main &&
                  weatherForecast.list[0].main.temp.toFixed()}{" "}
                °{tempType}
              </p>
              <p className="card-text">
                Weather Conditions:{" "}
                {weatherForecast &&
                  weatherForecast.list &&
                  weatherForecast.list[0] &&
                  weatherForecast.list[0].weather &&
                  weatherForecast.list[0].weather[0].description.toUpperCase()}
              </p>
              <p className="card-text">
                High Temp:{" "}
                {weatherForecast &&
                  weatherForecast.list &&
                  weatherForecast.list[0] &&
                  weatherForecast.list[0].main &&
                  weatherForecast.list[0].main.temp_max.toFixed()}{" "}
                °{tempType}, Low Temp:{" "}
                {weatherForecast &&
                  weatherForecast.list &&
                  weatherForecast.list[0] &&
                  weatherForecast.list[0].main &&
                  weatherForecast.list[0].main.temp_min.toFixed()}{" "}
                °{tempType}
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img
                height="100px"
                width="100px"
                src={currentWeatherForecastIconURL}
                alt="current weather icon"
              />
            </div>
          </div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                Expand more data in the current conditions area
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Wind Speed:{" "}
                {weatherForecast &&
                  weatherForecast.list &&
                  weatherForecast.list[0] &&
                  weatherForecast.list[0].wind &&
                  weatherForecast.list[0].wind.speed}{" "}
                km/h
              </Typography>
              <Typography>
                Humidity:{" "}
                {weatherForecast &&
                  weatherForecast.list &&
                  weatherForecast.list[0] &&
                  weatherForecast.list[0].main &&
                  weatherForecast.list[0].main.humidity}
                %
              </Typography>
              <Typography>
                Pressure:{" "}
                {weatherForecast &&
                  weatherForecast.list &&
                  weatherForecast.list[0] &&
                  weatherForecast.list[0].main &&
                  weatherForecast.list[0].main.pressure}
              </Typography>
              <Typography>
                Sun-rise / Sun-set Time: {sunrise.getHours()}:
                {sunrise.getMinutes()} / {sunset.getHours()}:{" "}
                {sunset.getMinutes()}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">
            Weekly weather for{" "}
            {weatherForecast &&
              weatherForecast.city &&
              weatherForecast.city.name}{" "}
            {weatherForecast &&
              weatherForecast.city &&
              weatherForecast.city.country}
          </h5>
          <small style={{ color: "red" }}>
            Daily Forecast 16 days API is not working (through 401 error in
            response) thats why I used that API
          </small>
          <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 25,
                pl: 2,
                bgcolor: "background.default",
              }}
            >
              <Typography>
                {weatherForecast &&
                weatherForecast.list &&
                weatherForecast.list.length !== 0
                  ? weatherForecast.list[activeStep].label
                  : 0}
              </Typography>
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {weatherForecast &&
              weatherForecast.list &&
              weatherForecast.list.length !== 0
                ? weatherForecast.list.map((item, index) => (
                    <div key={"weekly_Data" + index}>
                      <div className="card mb-3">
                        <div className="card-body">
                          <h5 className="card-title">
                            {new Date(item.dt * 1000).toDateString()}
                          </h5>
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <img
                                height={"50px"}
                                width={"50px"}
                                src={
                                  "http://openweathermap.org/img/w/" +
                                  item.weather[0].icon +
                                  ".png"
                                }
                                alt={item.weather[0].description}
                              />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <div className="row">
                                <div className="col-md-6 col-sm-6">
                                  <h6>{item.main.temp_max} ↑</h6>
                                  <h6>{item.main.temp_min} ↓</h6>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                  <h6>{item.weather[0].description}</h6>
                                  <h6>Precipitation: {item.clouds.all}</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : 0}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
  };
};

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(WeatherForecast);
