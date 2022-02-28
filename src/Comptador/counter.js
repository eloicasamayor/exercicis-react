const INCREMENT = "INCREMENT";
const RESET = "RESET";
const TOGGLE_LIMITADOR = "TOGGLE_LIMITADOR";

export function increment(amount) {
  return {
    type: INCREMENT,
    amount,
  };
}
export function reset() {
  return {
    type: RESET,
  };
}
export function toggleLimitador() {
  return {
    type: TOGGLE_LIMITADOR,
  };
}
export function counter(state = { valor: 0, limitador: false }, action) {
  switch (action.type) {
    case INCREMENT:
      return !state.limitador ||
        (state.valor + action.amount <= 10 && state.valor + action.amount >= 0)
        ? { ...state, valor: state.valor + action.amount }
        : { ...state };

    /*return !state.limitador ||
     */

    case RESET:
      return { ...state, valor: 0 };
    case TOGGLE_LIMITADOR:
      return { ...state, limitador: !state.limitador };
    default:
      return state;
  }
}
