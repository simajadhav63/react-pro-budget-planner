import React, { useContext } from 'react';
import { BudgetContext } from '../context/budgetcontext';

const Budget = () => {
  const { budget, setBudget } = useContext(BudgetContext);

  return (
    <div className="budget">
      <h2>Set Budget</h2>
      <input 
        type="number" 
        value={budget} 
        onChange={(e) => setBudget(e.target.value)} 
      />
    </div>
  );
};

export default Budget;
