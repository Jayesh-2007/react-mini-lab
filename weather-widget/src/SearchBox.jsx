import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
import Alert from '@mui/material/Alert';

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_ID = "3c4f6fb6b6b2a41a30215d7f6954b1b2";

  let getWeatherInfo = async () => {
    try {
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
      return requiredWeatherInfo;
    } catch (err) {
      throw err;
    }
  };

  let handleCityChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch {
      setError(true);
    }
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
      {error && <Alert severity="error">Such Places doesn't exist in our Api</Alert>}
    </div>
  );
}
