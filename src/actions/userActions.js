import { ADD_EXPENSE, GET_EXPENSE, UPDATE_EXPENSE } from '../actions/types';
import axios from 'axios';

export const addExpense = (expense) => async (dispatch) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  try {
    const newdate = new Date(expense.date);
    const year = newdate.getFullYear();
    const month = months[newdate.getMonth()];
    const date = newdate.getDate();
    expense.date = date + '-' + month + '-' + year;
    expense.month = month;
    const response = await axios.post(
      'http://localhost:3333/expenses',
      expense
    );
    dispatch({
      type: ADD_EXPENSE,
      payload: response.data,
    });
    console.log('Data Added');
    window.alert('Expense Added Successfully');
  } catch (error) {
    console.log(error.message);
  }
};

export const getExpenses = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3333/expenses');
  dispatch({
    type: GET_EXPENSE,
    payload: response.data,
  });
};
