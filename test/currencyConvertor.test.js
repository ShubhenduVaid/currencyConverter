import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";

import { CurrencyConvertor } from "../src/currencyConvertor";

configure({ adapter: new Adapter() });

describe("CurrencyConvertor Component", () => {
  // our mock login function to replace the one provided by mapDispatchToProps
  const mockLoginfn = jest.fn();
  const currencyConvertorReducer = {
    amount: "0",
    data: {
      success: true,
      terms: "https://currencylayer.com/terms",
      privacy: "https://currencylayer.com/privacy",
      timestamp: 1573488546,
      source: "USD",
      quotes: { USDEUR: 0.906035, USDGBP: 0.77725, USDUSD: 1 }
    },
    error: "",
    fromCurrency: "USD",
    loading: true,
    toCurrency: "EUR"
  };

  describe("render", () => {
    it("should render", () => {
      const wrapper = shallow(
        <CurrencyConvertor
          loadCurrencyConversion={mockLoginfn}
          currencyConvertorReducer={currencyConvertorReducer}
        />
      );
      expect(wrapper.exists()).toBe(true);
    });
  });
});
