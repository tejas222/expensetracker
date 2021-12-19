import { ADD_EXPENSE, GET_EXPENSE, UPDATE_EXPENSE } from '../actions/types';

let initialState = {
  transactions: [],
  transaction: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_EXPENSE:
      console.log('in Reducer');
      return {
        ...state,
        transactions: action.payload,
      };
    case GET_EXPENSE:
      return {
        ...state,
        transactions: action.payload,
      };
    case UPDATE_EXPENSE:
      return {
        transaction: action.payload,
      };
    default:
      return state;
  }
}
