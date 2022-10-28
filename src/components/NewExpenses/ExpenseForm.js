import { useState } from "react";
import "./ExpenseForm.css";

const uaerExpenses = {
  enteredTitle: "",
  enteredExpense: "",
  enteredDate: "",
};

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState(uaerExpenses);

  const userInputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredExpense,
      date: new Date(userInput.enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setUserInput({
      enteredTitle: "",
      enteredExpense: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Tilte</label>
          <input
            type="text"
            placeholder="Title"
            name="enteredTitle"
            value={userInput.enteredTitle}
            onChange={(event) => userInputChangeHandler(event)}
          />
        </div>

        <div className="new-expense__control">
          <label>Expense</label>
          <input
            type="number"
            placeholder="Expense"
            name="enteredExpense"
            value={userInput.enteredExpense}
            onChange={(event) => userInputChangeHandler(event)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2016-01-01"
            max="2025-12-31"
            name="enteredDate"
            value={userInput.enteredDate}
            onChange={(event) => userInputChangeHandler(event)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
