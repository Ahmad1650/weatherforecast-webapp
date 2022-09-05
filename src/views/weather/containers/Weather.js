import React, { Component } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import SearchByZipCode from "../components/SearchByZipCode";
import TempratureConverter from "../components/TempratureConverter";
import WeatherChart from "../components/WeatherChart";
import WeatherForecast from "../components/WeatherForecast";
import WeatherMap from "../components/WeatherMap";
import { connect } from "react-redux";
import * as WeatherAction from "../../../store/actions/Weather";

class Weather extends Component {
  constructor(props) {
    super(props);
    props.onLoadWeatherForecast();

    this.state = {
      tempType: "C",
      locationName: "",
    };
  }

  handleTempTypeChange = (tempType) => {
    this.setState({ tempType });
  };

  handleLocationName = (locationName) => {
    this.setState({ locationName });
  };

  render() {
    const { currentWeatherForecast } = this.props;

    return (
      <div className="container mt-3 mb-3">
        <div className="card border-success border border-3 mb-3 bg-info bg-opacity-10">
          <Header />
          <div className="card-body text-success">
            <div className="row mb-3">
              <div className="col-md-9 mb-3">
                <Search
                  tempType={this.state.tempType}
                  handleLocationName={this.handleLocationName}
                />
              </div>
              <div className="col-md-3">
                <SearchByZipCode />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <WeatherForecast
                  tempType={this.state.tempType}
                  currentWeatherForecast={currentWeatherForecast}
                />
              </div>
              <div className="col-md-6">
                <TempratureConverter
                  locationName={this.state.locationName}
                  handleTempTypeChange={this.handleTempTypeChange}
                />
                <WeatherChart
                  tempType={this.state.tempType}
                  currentWeatherForecast={currentWeatherForecast}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-12">
                <WeatherMap />
              </div>
            </div>
          </div>
          {/* <div className="card-footer bg-transparent border-success text-center">
            weather
          </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentWeatherForecast: state.weather.currentWeatherForecast,
  };
};

const actionMethods = {
  onLoadWeatherForecast: WeatherAction.GetTodayWeatherForecast,
};

export default connect(mapStateToProps, actionMethods)(Weather);
