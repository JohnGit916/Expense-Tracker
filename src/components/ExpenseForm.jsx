import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.amount) return;
    onAddExpense({
      name: formData.name,
      description: formData.description,
      category: formData.category,
      amount: parseFloat(formData.amount),
      date: formData.date || new Date().toISOString().split('T')[0]
    });
    setFormData({ name: '', description: '', category: '', amount: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Add Expense</h2>
      <input name="name" placeholder="Expense name" value={formData.name} onChange={handleChange} className="w-full mb-2 p-2 border" />
      <input name="description" placeholder="Expense description" value={formData.description} onChange={handleChange} className="w-full mb-2 p-2 border" />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} className="w-full mb-2 p-2 border" />
      <input name="amount" type="number" placeholder="Amount" value={formData.amount} onChange={handleChange} className="w-full mb-2 p-2 border" />
      <input name="date" type="date" value={formData.date} onChange={handleChange} className="w-full mb-2 p-2 border" />
      <button type="submit" className="w-full bg-black text-white py-2 rounded">Submit</button>
    </form>
  );
};

export default ExpenseForm;
