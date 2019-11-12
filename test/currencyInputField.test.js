import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { CurrencyInputField } from "../src/currencyInputField";

configure({ adapter: new Adapter() });

describe("CurrencyInputField Component", () => {
  // our mock login function to replace the one provided by mapDispatchToProps
  const mockLoginfn = jest.fn();
  const mockProps = {
    name: "USD",
    fromCurrency: "USD",
    toCurrency: "EUR",
    factor: { USDEUR: 0.906035, USDGBP: 0.77725, USDUSD: 1 },
    amount: "100",
    disabled: false
  };

  describe("render", () => {
    it("should render", () => {
      const wrapper = shallow(
        <CurrencyInputField
          putAmount={mockLoginfn}
          name={mockProps.name}
          fromCurrency={mockProps.fromCurrency}
          factor={mockProps.factor}
          amount={mockProps.amount}
          disabled={mockProps.disabled}
        />
      );
      expect(wrapper.exists()).toBe(true);
    });
  });
});
