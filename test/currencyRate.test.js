import React from "react";
import renderer from "react-test-renderer";
import { configure, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CurrencyRate from "../src/currencyRate";

configure({ adapter: new Adapter() });

describe("Check CurrencyRate component snapshots", () => {
  it("CurrencyRate component snapshot", () => {
    const component = renderer.create(<CurrencyRate />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("CurrencyRate Component", () => {
  const mockProps = {
    factor: { USDEUR: 0.906035, USDGBP: 0.77725, USDUSD: 1 },
    fromCurrency: "USD",
    toCurrency: "EUR"
  };

  describe("render", () => {
    it("should render", () => {
      const wrapper = shallow(
        <CurrencyRate
          toCurrency={mockProps.toCurrency}
          fromCurrency={mockProps.fromCurrency}
          factor={mockProps.factor}
        />
      );
      expect(wrapper.exists()).toBe(true);
    });
    it("should render the correct data", () => {
      const wrapper = render(
        <CurrencyRate
          toCurrency={mockProps.toCurrency}
          fromCurrency={mockProps.fromCurrency}
          factor={mockProps.factor}
        />
      );
      expect(wrapper.find(".msg").text()).toBe("1 USD = 0.9060 EUR");
    });
  });
});
