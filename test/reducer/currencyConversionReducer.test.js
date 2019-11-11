import currencyConvertorReducer from "../../src/reducers/currencyConversionReducer";
import {
  loadCurrencyConversion,
  LOAD_CURRENCYCONVERSION_LOADING,
  LOAD_CURRENCYCONVERSION_SUCCESS,
  LOAD_CURRENCYCONVERSION_ERROR
} from "../../src/actions/currencyConversionAction";
import {
  fromCurrency,
  toCurrency,
  putAmount,
  FROM_CURRENCY,
  TO_CURRENCY,
  AMOUNT_TOCONVERT
} from "../../src/actions/fromToCurrencyAction";
import expect from "expect";

describe("currencyConvertorReducer", () => {
  let initialState = {
    data: [],
    loading: false,
    error: "",
    fromCurrency: "USD",
    toCurrency: "EUR",
    amount: "0"
  };
  const mockData = {
    data: {
      success: true,
      terms: "https://currencylayer.com/terms",
      privacy: "https://currencylayer.com/privacy",
      timestamp: 1573488546,
      source: "USD",
      quotes: { USDEUR: 0.906035, USDGBP: 0.77725, USDUSD: 1 }
    }
  };

  it("should return the initial state", () => {
    expect(currencyConvertorReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle LOAD_CURRENCYCONVERSION_LOADING", () => {
    const startAction = {
      type: LOAD_CURRENCYCONVERSION_LOADING
    };
    const newState = { ...initialState, loading: true };
    expect(currencyConvertorReducer(undefined, startAction)).toEqual(newState);
  });

  it("should handle LOAD_CURRENCYCONVERSION_SUCCESS", () => {
    const successAction = {
      type: LOAD_CURRENCYCONVERSION_SUCCESS,
      response: mockData
    };
    const newState = { ...initialState, data: mockData.data };
    expect(currencyConvertorReducer(undefined, successAction)).toEqual(
      newState
    );
  });

  it("should handle LOAD_CURRENCYCONVERSION_ERROR", () => {
    const errorAction = {
      type: LOAD_CURRENCYCONVERSION_ERROR,
      error: "Unexpected Error"
    };
    const newState = { ...initialState, loading: false, error: "Unexpected Error" };
    expect(currencyConvertorReducer(undefined, errorAction)).toEqual(newState);
  });

  it("should handle FROM_CURRENCY", () => {
    const fromCurrencyAction = {
      type: FROM_CURRENCY,
      currency: "USD"
    };
    const newState = { ...initialState, fromCurrency: "USD" };
    expect(currencyConvertorReducer(undefined, fromCurrencyAction)).toEqual(newState);
  });

  it("should handle TO_CURRENCY", () => {
    const toCurrencyAction = {
      type: TO_CURRENCY,
      currency: "EUR"
    };
    const newState = { ...initialState, toCurrency: "EUR" };
    expect(currencyConvertorReducer(undefined, toCurrencyAction)).toEqual(newState);
  });

  it("should handle AMOUNT_TOCONVERT", () => {
    const amountAction = {
      type: AMOUNT_TOCONVERT,
      amount: "100"
    };
    const newState = { ...initialState, amount: "100" };
    expect(currencyConvertorReducer(undefined, amountAction)).toEqual(newState);
  });
});
