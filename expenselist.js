import React, { useContext } from 'react';
import { BudgetContext } from '../context/budgetcontext';
import Expense from './Expense';

const ExpenseList = () => {
  const { expenses } = useContext(BudgetContext);

  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      {expenses.map((expense, index) => (
        <Expense key={index} expense={expense} />
      ))}
    </div>
  );
};

export default ExpenseList;
