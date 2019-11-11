import React, { Component } from "react";
import PropTypes from "prop-types";

const rateContainer = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column"
};

const rateStyle = {
  textAlign: "center",
  color: "#00b9ff",
  fontStyle: "italic",
  fontSize: "larger"
};

export default class CurrencyRate extends Component {
  handleFraction = value => {
    const fraction = value.split(".")[1];
    if (fraction && fraction.length > 2) {
      return (+value).toFixed(4);
    }
    return value;
  };

  render() {
    const { toCurrency, fromCurrency, factor } = this.props;
    let rate = "";
    if (toCurrency === fromCurrency) {
      rate = "1";
    } else if (toCurrency === "USD") {
      rate = 1 / factor["USD" + fromCurrency];
    } else if (fromCurrency !== "USD" && toCurrency !== "USD") {
      rate = (1 / factor["USD" + fromCurrency]) * factor["USD" + toCurrency];
    } else {
      rate = 1 * factor["USD" + toCurrency];
    }
    rate = this.handleFraction(rate.toString());
    const message = `1 ${fromCurrency} = ${rate} ${toCurrency}`;
    return (
      <div style={rateContainer}>
        <p style={rateStyle}>{message}</p>
      </div>
    );
  }
}

CurrencyRate.propTypes = {
  toCurrency: PropTypes.string,
  fromCurrency: PropTypes.string,
  factor: PropTypes.object
};
