import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const onEditingHandler = () => {
    setIsEdit(true);
  };

  const stopEditingHandler = () => {
    setIsEdit(false);
  };
  return (
    <div className="new-expense">
      {!isEdit && (
        <button type="button" onClick={onEditingHandler}>
          Add New Expense
        </button>
      )}
      {isEdit && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
