import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = ({ expenses }) => {

  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandlre = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onchangeFilter={filterChangeHandlre}
      />
      <ExpensesList items={filterExpenses} />
    </Card>
    </li>
  );
};

export default Expenses;
