import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
  let [city, setCity] = useState("");
  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_ID = "3c4f6fb6b6b2a41a30215d7f6954b1b2";

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&APPID=${API_ID}&units=metric`
    );
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let requiredWeatherInfo = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(requiredWeatherInfo);
  };

  let handleCityChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
  };

  return (
    <div className="SearchBox">
      <h2>Search for the Weather</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          onChange={handleCityChange}
          value={city}
          required
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Search
        </Button>
      </form>
    </div>
  );
}
