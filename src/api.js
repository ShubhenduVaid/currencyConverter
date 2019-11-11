import axios from "axios";

const API_BASE_ADDRESS = "http://apilayer.net/";
const API_ACCESS_KEY = "4d1464e5b0f710a888e91bd6c6ca7cfc";
export default class Api {
  static getCurrentConversionRate(currencyToConvert) {
    const uri =
      API_BASE_ADDRESS +
      "api/live?access_key=" +
      API_ACCESS_KEY +
      "&currencies=" +
      currencyToConvert;
    return axios.get(uri);
  }
}
