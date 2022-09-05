import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { CategoryScale, LinearScale, BarElement, Title } from "chart.js";
import { connect } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeatherChart = (props) => {
  const options = [];

  const temperatureData = [];
  if (
    props.weather &&
    props.weather.length !== 0 &&
    props.weather.weatherForecast &&
    props.weather.weatherForecast.length !== 0 &&
    props.weather.weatherForecast.list &&
    props.weather.weatherForecast.list.length !== 0
  ) {
    for (const item of props.weather.weatherForecast.list) {
      temperatureData.push(parseInt(item.main.temp));
    }
  }

  const labels = [
    "00.00 am",
    "03.00 am",
    "06.00 am",
    "09.00 am",
    "12.00 pm",
    "03.00 pm",
    "06.00 pm",
    "09.00 pm",
  ];

  const transactionStatusData = {
    labels: labels,
    datasets: [
      {
        label: "Temprature in °" + props.tempType,
        data: temperatureData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
          "rgba(100, 50, 100, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
          "rgb(100, 50, 100)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Weather bar chart</h5>
        <Bar options={options} data={transactionStatusData} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
  };
};

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(WeatherChart);
