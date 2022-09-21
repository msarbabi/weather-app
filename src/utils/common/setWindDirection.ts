export const setWindDirection = (direction: string) => {
  switch (direction) {
    case "NNE":
    case "NE":
    case "ENE":
      return {
        icon: "bi-arrow-down-left",
        dir: "شمال شرق",
      };

    case "E":
      return {
        icon: "bi-arrow-left",
        dir: "شرق",
      };

    case "ESE":
    case "SE":
    case "SSE":
      return {
        icon: "bi-arrow-up-left",
        dir: "جنوب شرق",
      };

    case "S":
      return {
        icon: "bi-arrow-up",
        dir: "جنوب",
      };

    case "SSW":
    case "SW":
    case "WSW":
      return {
        icon: "bi-arrow-up-right",
        dir: "جنوب غرب",
      };

    case "W":
      return {
        icon: "bi-arrow-right",
        dir: "غرب",
      };

    case "WNW":
    case "NW":
    case "NNW":
      return {
        icon: "bi-arrow-down-right",
        dir: "شمال غرب",
      };

    case "N":
      return {
        icon: "bi-arrow-down",
        dir: "شمال",
      };
  }
}
