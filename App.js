import React from 'react';
import { BudgetProvider } from './context/budgetcontext';
import Header from './componant/Header.js';
import Budget from './componant/.budget.js';
import ExpenseForm from './componant/expenseform';
import ExpenseList from './componant/expenselist';
import './App.css';

const App = () => {
  return (
    <BudgetProvider>
      <div className="App">
        <Header />
        <div className="container">
          <Budget />
          <ExpenseForm />
          <ExpenseList />
        </div>
      </div>
    </BudgetProvider>
  );
};

export default App;
