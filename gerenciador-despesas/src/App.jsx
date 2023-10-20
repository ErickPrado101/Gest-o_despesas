import React, { useState, useEffect } from 'react';
import './App.css';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setExpenses(data));
  }, []);

  const addExpense = (newExpense) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ title: newExpense }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setExpenses([...expenses, data]);
      });
  };

  return (
    <div className="App">
      <h1>Gerenciador de Despesas</h1>
      <ExpenseForm onExpenseAdd={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
