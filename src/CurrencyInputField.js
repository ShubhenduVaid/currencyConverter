import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { putAmount } from "./actions/fromToCurrencyAction";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {
  putAmount
};

const inputStyle = {
  fontSize: "larger",
  width: "150px",
  padding: "10px"
};

export class CurrencyInputField extends Component {
  state = {
    value: ""
  };

  handleInputChange = event => {
    this.setState({
      ...this.state,
      value: this.handleFraction(event.target.value)
    });
    this.props.putAmount(this.handleFraction(event.target.value));
  };

  handleFraction = value => {
    const fraction = value.split(".")[1];
    if (fraction && fraction.length > 2) {
      return (+value).toFixed(2);
    }
    return value;
  };

  render() {
    const {
      name,
      fromCurrency,
      toCurrency,
      factor,
      amount,
      disabled
    } = this.props;
    let inputValue = this.state.value;
    if (amount > 0 && name === toCurrency) {
      if (toCurrency === fromCurrency) {
        inputValue = amount;
      } else if (toCurrency === "USD") {
        inputValue = amount / factor["USD" + fromCurrency];
      } else if (fromCurrency !== "USD" && toCurrency !== "USD") {
        inputValue =
          (amount / factor["USD" + fromCurrency]) * factor["USD" + toCurrency];
      } else {
        inputValue = amount * factor["USD" + toCurrency];
      }
      inputValue = this.handleFraction(inputValue.toString());
    }
    return (
      <>
        <input
          style={inputStyle}
          type="number"
          placeholder="0"
          value={inputValue}
          onChange={this.handleInputChange}
          disabled={disabled}
        />
      </>
    );
  }
}

CurrencyInputField.propTypes = {
  name: PropTypes.string,
  toCurrency: PropTypes.string,
  fromCurrency: PropTypes.string,
  factor: PropTypes.object,
  amount: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyInputField);
