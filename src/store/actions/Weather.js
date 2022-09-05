import { axiosGet } from "../../api/Axios";
import * as endpoints from "../../config/EndPoints";
import { StatusCode } from "../../config/Constants";
import * as actionType from "../constants/Weather";
const { BaseURL } = endpoints;

export const GetTodayWeatherForecast =
  (locationName, tempType) => (dispatch) => {
    const url =
      BaseURL +
      `?q=${locationName}&cnt=8&units=${
        tempType === "C" ? "metric" : "imperial"
      }&appid=307a5c1635f2fb6692a29eb3d2d87c2f`;
    axiosGet(url)
      .then((response) => {
        let todayWeatherForecast = [];

        if (response.status === StatusCode.OK) {
          todayWeatherForecast = response.data;
        }

        dispatch({
          type: actionType.GET_TODAY_WEATHER_FORECAST,
          weatherForecast: todayWeatherForecast,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionType.GET_TODAY_WEATHER_FORECAST,
          weatherForecast: [],
        });
      });
  };

export const GetTodayWeatherForecastByZipCode = (zipCode) => (dispatch) => {
  const url =
    BaseURL + `?zip=${zipCode}&appid=307a5c1635f2fb6692a29eb3d2d87c2f`;
  axiosGet(url)
    .then((response) => {
      let todayWeatherForecastByZipCode = [];

      if (response.status === StatusCode.OK) {
        todayWeatherForecastByZipCode = response.data;
      }

      dispatch({
        type: actionType.GET_TODAY_WEATHER_FORECAST,
        weatherForecastByZipCode: todayWeatherForecastByZipCode,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionType.GET_TODAY_WEATHER_FORECAST,
        weatherForecastByZipCode: [],
      });
    });
};
