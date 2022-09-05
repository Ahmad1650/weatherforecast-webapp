import * as actionType from "../constants/Weather";

const intialState = {
  weatherForecast: [],
};

const WeatherReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionType.GET_TODAY_WEATHER_FORECAST:
      return {
        ...state,
        weatherForecast: action.weatherForecast,
      };
    default:
      break;
  }

  return state;
};

export default WeatherReducer;
