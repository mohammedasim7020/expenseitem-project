import React from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpensesDate from "../Expenses/ExpensesDate";

const ExpenseItems = (props) => {
  return (
    <Card className="expense-item">
      <ExpensesDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItems;
