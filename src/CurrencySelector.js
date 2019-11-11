import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fromCurrency, toCurrency } from "./actions/fromToCurrencyAction";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {
  fromCurrency,
  toCurrency
};

const selectorContainer = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  minWidth: "100px",
  marginRight: "20px"
};

const selectStyle = {
  marginTop: "10px",
  fontSize: "medium"
};

const labelStyle = {
  fontSize: "medium",
  textAlign: "center",
  color: "white"
};

export class CurrencySelector extends Component {
  handleChange = event => {
    if (this.props.name === "FROM") {
      this.props.fromCurrency(event.target.value);
    } else {
      this.props.toCurrency(event.target.value);
    }
  };

  render() {
    const { label, value, options } = this.props;
    return (
      <div style={selectorContainer}>
        <label style={labelStyle}>{label}</label>
        <select style={selectStyle} value={value} onChange={this.handleChange}>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

CurrencySelector.propTypes = {
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string,
  name: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencySelector);
