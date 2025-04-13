// src/App.jsx
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';
import './App.css'; // <-- Make sure this is imported

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Novel', description: "Clean code", category: 'Books', amount: 500, date: '2025-04-13' },
    { id: 2, name: 'Kplc', description: 'Tokens', category: 'utilities', amount: 2000, date: '2025-04-13' },
    { id: 3, name: 'Taxido', description: 'Official suit', category: 'Clothes', amount: 25000, date: '2025-04-13' },
    { id: 4, name: 'Water', description: 'Monthly bill', category: 'utilities', amount: 1000, date: '2025-04-13' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const filteredExpenses = expenses.filter(
    (exp) =>
      exp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="expense-form">
        <ExpenseForm onAddExpense={handleAddExpense} />
      </div>
      <div className="expense-display">
        <div className="search-bar">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <ExpenseTable expenses={filteredExpenses} onDeleteExpense={handleDeleteExpense} />
      </div>
    </div>
  );
};

export default App;
