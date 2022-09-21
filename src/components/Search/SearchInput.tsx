import React, { useEffect, useReducer } from "react";
import useWeather from "../../hooks/useWeather/get/useWeather";
import { baseReducer } from "../../state/utils/baseReducer";
import { setDataArray } from "../../utils/common/setDataArray";
import ShowError from "../ShowError/ShowError";
import WeatherSearched from "../WeatherSearched/WeatherSearched";

import "./search-input.scss"

const customState = {
  cityName: "",
  showResult: false,
  arrayData: [],
}

const SearchInput = () => {
  const [state, dispatch] = useReducer(baseReducer({ ...customState }), { ...customState });
  const [{ data, loading, error }, getWeather] = useWeather();

  useEffect(() => {
    data && dispatch({ type: "arrayData", value: setDataArray(data) })
  }, [data])

  const handleOnChange = (event: any) => {
    dispatch({ type: "showResult", value: false });
    dispatch({ type: "cityName", value: event.target.value });
  };

  const handleOnClick = () => {
    getWeather(state.cityName);
    dispatch({ type: "showResult", value: true });
  }

  return (
    <>
      <div className="search-group">
        <input
          type="text"
          placeholder="مثلا مشهد"
          className="search-input px-2 mb-3"
          onChange={handleOnChange}
          value={state.cityName}
        />
        <button className="btn btn-success search-button" onClick={handleOnClick} disabled={!state.cityName.length}>جستجو</button>
      </div>
      {(state.showResult && data && !error) &&
        <WeatherSearched
          cityName={state.cityName}
          data={state.arrayData}
          isLoading={loading}
          showResult={state.showResult}
        />
      }
      {error && <ShowError error={error} />}
    </>
  )
}

export default React.memo(SearchInput);