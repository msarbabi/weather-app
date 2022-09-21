import { setWindDirection } from "./setWindDirection"

export const setDataArray = (data: any) => {
  return [
    {
      title: "دما",
      iconClass: 'bi-thermometer-half',
      value: `${data.feelsTemp}°C`
    }, {
      title: "دما واقعی",
      iconClass: 'bi-thermometer-high',
      value: `${data.temp}°C`
    }, {
      title: "UV",
      iconClass: 'bi-info-circle',
      value: data.uvIndex
    }, {
      title: "سرعت باد",
      iconClass: 'bi-wind',
      value: `${data.windSpeed}Km/h`
    }, {
      title: "جهت وزش باد",
      iconClass: setWindDirection(data.windDirection)?.icon,
      value: setWindDirection(data.windDirection)?.dir,
    }, {
      title: "رطوبت",
      iconClass: 'bi-droplet',
      value: `${data.humidity}%`
    }, {
      title: "شعاع دید",
      iconClass: 'bi-eye',
      value: `${data.visibility}Km`
    }
  ]
}