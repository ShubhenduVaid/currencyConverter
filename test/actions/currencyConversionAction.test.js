import axios from "axios";
import "core-js/stable";
import "regenerator-runtime/runtime";
import {
  loadCurrencyConversion,
  LOAD_CURRENCYCONVERSION_LOADING,
  LOAD_CURRENCYCONVERSION_SUCCESS
} from "../../src/actions/currencyConversionAction";

describe("currencyConversionActions", () => {
  it("LOAD_CURRENCYCONVERSION_LOADING, LOAD_CURRENCYCONVERSION_SUCCESS are created when loadCurrencyConversion success", async () => {
    const expected = [
      { type: LOAD_CURRENCYCONVERSION_LOADING },
      { type: LOAD_CURRENCYCONVERSION_SUCCESS }
    ];

    // mock the axios.get method, so it will just resolve the Promise.
    axios.get = jest.fn(url => {
      return Promise.resolve();
    });
    // mock the dispatch and getState functions from Redux thunk.
    const dispatch = jest.fn(),
      getState = jest.fn(() => {
        url: "http://apilayer.net/";
      });

    // execute
    await loadCurrencyConversion("EUR,GBP,USD")(dispatch, getState);

    // verify
    expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
  });
  it("LOAD_CURRENCYCONVERSION_LOADING are created when loadCurrencyConversion fails", async () => {
    const expected = [
      { type: LOAD_CURRENCYCONVERSION_LOADING },
    ];

    // mock the axios.get method, so it will just resolve the Promise.
    axios.get = jest.fn(url => {
      return Promise.reject();
    });
    // mock the dispatch and getState functions from Redux thunk.
    const dispatch = jest.fn(),
      getState = jest.fn(() => {
        url: "http://apilayer.net/";
      });

    // execute
    await loadCurrencyConversion("EUR,GBP,USD")(dispatch, getState);

    // verify
    expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
  });
});
