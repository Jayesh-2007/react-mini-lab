import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/Sunny";

export default function Infobox({ Info }) {
  let INIT_IMG =
    "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let HOT_TEMP_IMG =
    "https://images.unsplash.com/photo-1651077169450-58e7fe39ae9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHN1biUyMGVmZmN0JTIwb24lMjB3aGVhdHxlbnwwfHwwfHx8MA%3D%3D";
  let COLD_TEMP_IMG =
    "https://images.unsplash.com/photo-1679888669601-6b09f4963943?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let RAIN_IMG =
    "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
      <div className="container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              Info.humidity > 80
                ? RAIN_IMG
                : Info.temp > 15
                ? HOT_TEMP_IMG
                : COLD_TEMP_IMG
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Info.city}{" "}
              {Info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : Info.temp > 15 ? (
                <SunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temprature= {Info.temp}&deg;C</p>
              <p>Humidity= {Info.humidity}</p>
              <p>Min Temp= {Info.tempMin}&deg;C</p>
              <p>Max Temp= {Info.tempMax}&deg;C</p>
              <p>
                The weather can be described as {Info.weather} and feels like{" "}
                {Info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
