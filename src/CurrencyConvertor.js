import React, { Component } from "react";
import { connect } from "react-redux";

import CurrencyInputField from "./currencyInputField";
import CurrencySelector from "./currencySelector";
import CurrencyRate from "./currencyRate";
import { loadCurrencyConversion } from "./actions/currencyConversionAction";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {
  loadCurrencyConversion
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  height: "100%"
};

const converterStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row"
};

export class CurrencyConvertor extends Component {
  componentDidMount() {
    this.props.loadCurrencyConversion("EUR,GBP,USD");
    this.dataPolling = setInterval(() => {
      this.props.loadCurrencyConversion("EUR,GBP,USD");
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.dataPolling);
  }

  render() {
    const { currencyConvertorReducer } = this.props;
    if (currencyConvertorReducer.error) {
      return <div style={{ color: "red" }}>ERROR: {this.props.error}</div>;
    }
    if (currencyConvertorReducer.data.quotes) {
      return (
        <div style={containerStyle}>
          <div style={converterStyle}>
            <CurrencySelector
              value={currencyConvertorReducer.fromCurrency}
              options={["USD", "EUR", "GBP"]}
              label="You sent"
              name="FROM"
            />
            <CurrencyInputField
              name={currencyConvertorReducer.fromCurrency}
              toCurrency={currencyConvertorReducer.toCurrency}
              fromCurrency={currencyConvertorReducer.fromCurrency}
              factor={currencyConvertorReducer.data.quotes}
              amount={currencyConvertorReducer.amount}
            ></CurrencyInputField>
          </div>
          <CurrencyRate
            toCurrency={currencyConvertorReducer.toCurrency}
            fromCurrency={currencyConvertorReducer.fromCurrency}
            factor={currencyConvertorReducer.data.quotes}
          />
          <div style={converterStyle}>
            <CurrencySelector
              value={currencyConvertorReducer.toCurrency}
              options={["USD", "EUR", "GBP"]}
              label="Recepient gets"
              name="TO"
            />
            <CurrencyInputField
              name={currencyConvertorReducer.toCurrency}
              disabled={true}
              toCurrency={currencyConvertorReducer.toCurrency}
              fromCurrency={currencyConvertorReducer.fromCurrency}
              factor={currencyConvertorReducer.data.quotes}
              amount={currencyConvertorReducer.amount}
            ></CurrencyInputField>
          </div>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyConvertor);
