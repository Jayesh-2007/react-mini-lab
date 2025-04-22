import InfoBox from "./InfoBox.jsx";
import SearchBox from "./SearchBox.jsx";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 30.99,
    humidity: 23,
    temp: 32.82,
    tempMax: 32.82,
    tempMin: 32.82,
    weather: "clear sky",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return (
    <div>
      <SearchBox updateInfo={updateInfo}/>
      <br />
      <InfoBox Info={weatherInfo}/>
    </div>
  );
}
