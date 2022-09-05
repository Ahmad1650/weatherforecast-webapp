import { combineReducers } from "redux";

import WeatherReducer from "./reducers/Weather";

export default combineReducers({
  weather: WeatherReducer,
});
