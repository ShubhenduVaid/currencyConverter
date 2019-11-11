import Api from "../api";

export const LOAD_CURRENCYCONVERSION_LOADING =
  "LOAD_CURRENCYCONVERSION_LOADING";
export const LOAD_CURRENCYCONVERSION_SUCCESS =
  "LOAD_CURRENCYCONVERSION_SUCCESS";
export const LOAD_CURRENCYCONVERSION_ERROR = "LOAD_CURRENCYCONVERSION_ERROR";

export const loadCurrencyConversion = currencyToConvert => dispatch => {
  dispatch({ type: LOAD_CURRENCYCONVERSION_LOADING });
  Api.getCurrentConversionRate(currencyToConvert)
    .then(response => response.json())
    .then(
      data => dispatch({ type: LOAD_CURRENCYCONVERSION_SUCCESS, data }),
      error =>
        dispatch({
          type: LOAD_CURRENCYCONVERSION_ERROR,
          error: error.message || "Unexpected Error!!!"
        })
    );
};
