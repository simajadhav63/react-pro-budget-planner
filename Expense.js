import React from 'react';

const Expense = ({ expense }) => {
  return (
    <div className="expense">
      <span>{expense.name}</span>
      <span>${expense.amount}</span>
    </div>
  );
};

export default Expense;
