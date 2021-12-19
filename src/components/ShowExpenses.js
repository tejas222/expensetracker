import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getExpenses } from '../actions/userActions';

const ShowExpenses = (props) => {
  useEffect(() => {
    props.getExpenses();
  }, []);
  const expense = props.expenses.transactions;
  const credit = expense
    .filter((data) => data.transactionType === 'Credit')
    .map((item) => parseInt(item.amount))
    .reduce((accum, first) => accum + first, 0);

  const debit = expense
    .filter((data) => data.transactionType === 'Debit')
    .map((item) => parseInt(item.amount))
    .reduce((accum, first) => accum + first, 0);

  console.log(credit);
  console.log(expense);
  return (
    <div className='table-responsive'>
      <h3 className='text-success'>Total Credit :- {credit}</h3>
      <h3 className='text-danger'>Total Debit :- {debit}</h3>

      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expense.slice(-5).map((data, key) => {
            return (
              <tr>
                <td key={key}>{data.title}</td>
                <td>{data.amount} Rs</td>
                <td
                  className={
                    data.transactionType == 'Credit'
                      ? 'bg-success text-white'
                      : ' bg-danger text-white'
                  }
                >
                  {data.transactionType}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
ShowExpenses.propTypes = {
  expenses: PropTypes.object.isRequired,
  getExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.expense,
});

export default connect(mapStateToProps, { getExpenses })(ShowExpenses);
