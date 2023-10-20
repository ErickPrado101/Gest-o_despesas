import React from 'react';

function ExpenseList({ expenses }) {
  return (
    <div>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>{expense}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
