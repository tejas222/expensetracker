import React, { useState } from 'react';
import { addExpense } from '../actions/userActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Form = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      title,
      amount,
      transactionType,
      date: new Date(),
      month: new Date(),
    };
    props.addExpense(transaction, props.history);
    setTitle('');
    setAmount('');
    setTransactionType('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-control mb-2'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='number'
          className='form-control mb-2'
          placeholder='Amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          className='form-control'
          onChange={(e) => setTransactionType(e.target.value)}
        >
          <option disabled>Select</option>
          <option>Credit</option>
          <option>Debit</option>
        </select>
        <input
          type='submit'
          className='btn btn-success mt-2 w-100'
          value='Add Expense'
        />
      </form>
    </>
  );
};

Form.propTypes = {
  addExpense: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  addExpense: state.expense,
});
export default connect(mapStateToProps, { addExpense })(Form);
