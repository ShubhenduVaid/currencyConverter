import "core-js/stable";
import "regenerator-runtime/runtime";
import {
  FROM_CURRENCY,
  TO_CURRENCY,
  AMOUNT_TOCONVERT,
  fromCurrency,
  toCurrency,
  putAmount
} from "../../src/actions/fromToCurrencyAction";

describe("fromCurrency", () => {
  it("FROM_CURRENCY is created when fromCurrency called", async () => {
    const expected = [{ type: FROM_CURRENCY, currency: "USD" }];

    // mock the dispatch and getState functions from Redux thunk.
    const dispatch = jest.fn(),
      getState = jest.fn(() => {
        currency: "USD";
      });

    // execute
    await fromCurrency("USD")(dispatch, getState);

    // verify
    expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
  });
});

describe("toCurrency", () => {
  it("TO_CURRENCY is created when toCurrency called", async () => {
    const expected = [{ type: TO_CURRENCY, currency: "EUR" }];

    // mock the dispatch and getState functions from Redux thunk.
    const dispatch = jest.fn(),
      getState = jest.fn(() => {
        currency: "EUR";
      });

    // execute
    await toCurrency("EUR")(dispatch, getState);

    // verify
    expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
  });
});

describe("putAmount", () => {
  it("AMOUNT_TOCONVERT is created when putAmount called", async () => {
    const expected = [{ type: AMOUNT_TOCONVERT, amount: "100" }];

    // mock the dispatch and getState functions from Redux thunk.
    const dispatch = jest.fn(),
      getState = jest.fn(() => {
        amount: "100";
      });

    // execute
    await putAmount("100")(dispatch, getState);

    // verify
    expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
  });
});
