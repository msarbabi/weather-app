import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./topCities.scss";

const TopCities = () => {
  const topCities = ["تهران", "مشهد", "شیراز", "اصفهان"];

  return (
    <div>
      <div className="w-card-group row justify-content-between">
        {
          topCities.map((city: string, index: number) =>
            <WeatherCard city={city} key={index} />
          )
        }
      </div>
    </div>
  )
}

export default React.memo(TopCities);