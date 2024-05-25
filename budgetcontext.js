import React, { createContext, useState } from 'react';

const BudgetContext = createContext();

const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);

  return (
    <BudgetContext.Provider value={{ budget, setBudget, expenses, setExpenses }}>
      {children}
    </BudgetContext.Provider>
  );
};

export { BudgetContext, BudgetProvider };
