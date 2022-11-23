import React from "react";
import ExpenseItem from "./ExpenseItem";
import styled from "styled-components";

const ExpenseList = ({ lists }) => {
  if (lists.length === 0) {
    return <StyledFallback>Found No Expenses.</StyledFallback>;
  }

  return (
    <StyledList>
      {lists.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      ))}
    </StyledList>
  );
};

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledFallback = styled.h2`
  color: white;
  text-align: center;
`;

export default ExpenseList;
