import React from 'react';

const ExpenseTable = ({ expenses, onDeleteExpense }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded p-4">
      <h2 className="text-xl font-bold mb-4">Expenses</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td className="border px-4 py-2">{expense.name}</td>
              <td className="border px-4 py-2">{expense.description}</td>
              <td className="border px-4 py-2">{expense.category}</td>
              <td className="border px-4 py-2">{expense.amount}</td>
              <td className="border px-4 py-2">{expense.date}</td>
              <td className="border px-4 py-2">
                <button onClick={() => onDeleteExpense(expense.id)} className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
