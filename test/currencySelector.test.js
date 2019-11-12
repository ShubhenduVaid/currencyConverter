import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { CurrencySelector } from "../src/currencySelector";

configure({ adapter: new Adapter() });

describe("CurrencySelector Component", () => {
  // our mock login function to replace the one provided by mapDispatchToProps
  const mockLoginfn = jest.fn();
  const mockProps = {
    options: ["USD", "EUR", "GBP"],
    label: "Recepient gets",
    name: "TO",
    value: "EUR"
  };

  describe("render", () => {
    it("should render", () => {
      const wrapper = shallow(
        <CurrencySelector
          fromCurrency={mockLoginfn}
          fromCurrency={mockLoginfn}
          options={mockProps.options}
          label={mockProps.label}
          name={mockProps.name}
          value={mockProps.value}
        />
      );
      expect(wrapper.exists()).toBe(true);
    });
  });
});
