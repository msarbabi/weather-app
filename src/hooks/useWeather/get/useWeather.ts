import { useReducer } from "react"
import { baseReducer } from "../../../state/utils/baseReducer"
import axios from "axios";
import { currentWeatherSanitize } from "../../../utils/sanitize/currentWeather/currentWeatherSanitize";

const customState = {
  loading: false,
  data: null,
  error: null,
}

export default () => {
  const [state, dispatch] = useReducer(baseReducer({ ...customState }), { ...customState });

  const getWeather = async (city: string) => {
    dispatch({ type: "loading", value: true });

    try {
      const { status, data } = await axios.get(`http://wttr.in/${city}?format=j1`);

      switch (status) {
        case 200:
          dispatch({ type: "data", value: currentWeatherSanitize(data.current_condition[0]) });
          dispatch({type: "error", value: null});
          break;

        case 404:
          dispatch({ type: "data", value: null });
          dispatch({ type: "error", value: "متاسفانه شهر مورد نظر یافت نشد." });
          break;

        default:
          dispatch({ type: "data", value: null });
          dispatch({ type: "error", value: "خطایی رخ داده لطفا مجدد تلاش کنید." });
          break

      }
    } catch (e: any) {
      if (e.response.status === 404) {
        dispatch({ type: "data", value: null });
        dispatch({ type: "error", value: "متاسفانه شهر مورد نظر یافت نشد." });
        return;
      }

      dispatch({ type: "data", value: null });
      dispatch({ type: "error", value: "خطایی رخ داده لطفا مجدد تلاش کنید." });
    }
    dispatch({ type: "loading", value: false });
  }


  return [state, getWeather];
}