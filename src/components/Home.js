import React from 'react';
import Form from './Form';
import ShowExpenses from './ShowExpenses';

const Home = () => {
  return (
    <div className='container '>
      <div className='col-md-5 m-auto  mt-3 p-4'>
        <div className='mb-2'>
          <h1 className='text-primary mb-4 text-center'>Expence Tracker</h1>
        </div>
        <div>
          <Form />
        </div>
        <div className='mt-4'>
          <h2 className='text-center text-primary'>Expence Details</h2>
          <ShowExpenses />
        </div>
      </div>
    </div>
  );
};

export default Home;
