import React from "react";
import renderer from "react-test-renderer";
import { configure } from "enzyme";
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
