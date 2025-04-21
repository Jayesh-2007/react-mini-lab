import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
  let [city, setCity] = useState("");

  let handleCityChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(city);
    setCity("");
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
