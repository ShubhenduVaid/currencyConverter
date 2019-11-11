import {
  LOAD_CURRENCYCONVERSION_LOADING,
  LOAD_CURRENCYCONVERSION_SUCCESS,
  LOAD_CURRENCYCONVERSION_ERROR
} from "../actions/currencyConversionAction";

import {
  FROM_CURRENCY,
  TO_CURRENCY,
  AMOUNT_TOCONVERT
} from "../actions/fromToCurrencyAction";

const initialState = {
  data: [],
  loading: false,
  error: "",
  fromCurrency: "USD",
  toCurrency: "EUR",
  amount: "0"
};

export default function currencyConvertorReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CURRENCYCONVERSION_LOADING: {
      return {
        ...state,
        loading: true,
        error: ""
      };
    }
    case LOAD_CURRENCYCONVERSION_SUCCESS: {
      return {
        ...state,
        data: action.response.data,
        loading: false
      };
    }
    case LOAD_CURRENCYCONVERSION_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }
    case FROM_CURRENCY: {
      return {
        ...state,
        fromCurrency: action.currency
      };
    }
    case TO_CURRENCY: {
      return {
        ...state,
        toCurrency: action.currency
      };
    }
    case AMOUNT_TOCONVERT: {
      return {
        ...state,
        amount: action.amount
      };
    }
    default: {
      return state;
    }
  }
}
