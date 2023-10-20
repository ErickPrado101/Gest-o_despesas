import React, { useState } from 'react';

function ExpenseForm({ onExpenseAdd }) {
  const [expense, setExpense] = useState('');

  const handleExpenseSubmit = () => {
    onExpenseAdd(expense);
    setExpense('');
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Despesa"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
      />
      <button onClick={handleExpenseSubmit}>Adicionar Despesa</button>
    </div>
  );
}

export default ExpenseForm;
