export const FROM_CURRENCY = "FROM_CURRENCY";
export const TO_CURRENCY = "TO_CURRENCY";
export const AMOUNT_TOCONVERT = "AMOUNT_TOCONVERT";

export const fromCurrency = currency => dispatch => {
  dispatch({ type: FROM_CURRENCY, currency });
};

export const toCurrency = currency => dispatch => {
  dispatch({ type: TO_CURRENCY, currency });
};

export const putAmount = amount => dispatch => {
  dispatch({ type: AMOUNT_TOCONVERT, amount });
};
