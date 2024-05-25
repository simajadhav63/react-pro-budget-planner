import React, { useContext, useState } from 'react';
import { BudgetContext } from '../context/budgetcontext';

const ExpenseForm = () => {
  const { expenses, setExpenses } = useContext(BudgetContext);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const addExpense = (e) => {
    e.preventDefault();
    setExpenses([...expenses, { name, amount: parseFloat(amount) }]);
    setName('');
    setAmount('');
  };

  return (
    <form onSubmit={addExpense} className="expense-form">
      <h2>Add Expense</h2>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Expense name"
      />
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="Amount"
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
