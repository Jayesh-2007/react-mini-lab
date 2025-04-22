import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function Infobox({Info}) {
  let INIT_IMG =
    "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="InfoBox">
      <div className="container">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={INIT_IMG} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
            <p>Temprature= {Info.temp}&deg;C</p>
            <p>Humidity= {Info.humidity}</p>
            <p>Min Temp= {Info.tempMin}&deg;C</p>
            <p>Max Temp= {Info.tempMax}&deg;C</p>
            <p>The weather can be described as {Info.weather} and feels like {Info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
