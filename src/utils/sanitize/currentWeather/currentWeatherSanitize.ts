export const currentWeatherSanitize = (currentWeather: any) => {
  return {
    temp: currentWeather.temp_C,
    feelsTemp: currentWeather.FeelsLikeC,
    humidity: currentWeather.humidity,
    visibility: currentWeather.visibility,
    windSpeed: currentWeather.windspeedKmph,
    uvIndex: currentWeather.uvIndex,
    windDirection: currentWeather.winddir16Point,
    weatherDesc: "clear"
  }
}
