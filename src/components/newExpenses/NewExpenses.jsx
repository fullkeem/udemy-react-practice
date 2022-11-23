import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import styled from "styled-components";

const NewExpenses = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    stopEditingHandler(false);
  };

  const onEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <StyledNew>
      <div className='new-expense'>
        {!isEditing && (
          <button onClick={onEditingHandler}>add New Expense</button>
        )}
        {isEditing && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    </StyledNew>
  );
};

const StyledNew = styled.div`
  .new-expense {
    background-color: #a892ee;
    padding: 1rem;
    margin: 2rem auto;
    width: 50rem;
    max-width: 95%;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  .new-expense button {
    font: inherit;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 1px solid #40005d;
    background-color: #40005d;
    color: white;
    border-radius: 12px;
    margin-right: 1rem;
  }

  .new-expense button:hover,
  .new-expense button:active {
    background-color: #510674;
    border-color: #510674;
  }

  .new-expense button.alternative {
    color: #220131;
    border-color: transparent;
    background-color: transparent;
  }

  .new-expense button.alternative:hover,
  .new-expense button.alternative:active {
    background-color: #ddb3f8;
  }
`;

export default NewExpenses;
