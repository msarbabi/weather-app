import React, { useEffect } from "react";
import { MagnifyingGlass } from 'react-loader-spinner'

import useWeather from "../../hooks/useWeather/get/useWeather";

import "./weatherCard.scss";

const WeatherCard = ({ city }: { city: string }) => {

  const [{ loading, data }, getWeather] = useWeather();
  useEffect(() => {
    getWeather(city);
  }, []);

  return (
    <div className="col-xs-12 col-sm-6 col-md-3">
      <div className=" w-card">
        <p className="title p-2">{city}</p>
        {data && (
          <>
            <img src={require("../../assets/images/sun.png")} width="150" height="150" alt="" />
            <p className="mb-0">{data.feelsTemp}°C</p>
            <p className="weather-type mb-3">صاف</p>
            <div style={{ backgroundColor: "#ffd960" }} className="d-flex justify-content-around font-size pt-2">
              <span>{data.uvIndex} <i className="bi bi-info-circle"></i></span>
              <span>{data.humidity}% <i className="bi bi-droplet"></i></span>
              <span>{data.windSpeed}Km/h <i className="bi bi-wind"></i></span>
            </div>
            <div style={{ backgroundColor: "#ffd960" }} className="border-radius d-flex justify-content-around px-3 pb-2 pt-1">
              <span className="font-size">{data.temp}°C <i className="bi bi-thermometer-half"></i></span>
              <span className="font-size">{data.visibility}Km <i className="bi bi-eye"></i></span>
            </div>
          </>
        )}
        {loading &&
          <div className="magnify-loading">
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="MagnifyingGlass-loading"
              wrapperStyle={{}}
              wrapperClass="MagnifyingGlass-wrapper"
              glassColor='#c0efff'
              color='#e15b64'
            />
          </div>
        }
      </div>
    </div>
  )
}

export default React.memo(WeatherCard);