import { Router } from "express";
import axios from "axios";

const requestRouter = Router();

export const getWeather = async (req, res) => {
  try {
    const { city, country } = req.params;

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.API_KEY}&units=metric`,
    );

   // console.log(response.data);

    const requiredData = {
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      weather: response.data.weather[0].description,
      wind: response.data.wind.speed,
    };

    res.status(200).json(requiredData);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



requestRouter.get("/search/:city/:country", getWeather);

export default requestRouter;
