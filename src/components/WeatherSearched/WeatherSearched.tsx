import React from "react";


import { WeatherSearchedInterface } from "./WeatherSearchedTypes";

import "./weatherSearched.scss"
import { MagnifyingGlass } from "react-loader-spinner";

const WeatherSearched: React.FC<WeatherSearchedInterface> = ({ cityName, data, isLoading, showResult }) => {

  return (
    <>
      {!isLoading &&
        <div className="weather-searched d-flex justify-content-around row">
          <div className="col-sm-12 col-md-3">
            <img src={require("../../assets/images/sun.png")} height="200" width="200" alt="" />
            <p className="weather-desc">صاف</p>
          </div>
          <div className="city-data col-sm-12 col-md-9 row justify-content-between">
            <p className="mb-0 py-1 mb-3 city-name col-md-12">{cityName}</p>
            {data.map((row: any, index: number) => (
              <>
                <p className={`mb-0 py-1 col-xs-4 col-sm-4 ${!(index % 2) && "bg-color-grey"}`}>{row.title}</p>
                <p className={`mb-0 py-1 col-xs-4 col-sm-4 ${!(index % 2) && "bg-color-grey"}`}><i className={`bi ${row.iconClass}`}></i></p>
                <p className={`mb-0 py-1 col-xs-4 col-sm-4 ${!(index % 2) && "bg-color-grey"}`}>{row.value}</p>
              </>
            ))}
          </div>
        </div>}
      {(isLoading && showResult) &&
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
    </>
  )
}

export default React.memo(WeatherSearched);