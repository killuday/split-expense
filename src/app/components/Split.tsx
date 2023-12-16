"use client";
import React, { useState, ChangeEvent } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Split: React.FC = () => {
  const [totalExpense, setTotalExpense] = useState<string>("");
  const [numberOfPersons, setNumberOfPersons] = useState<string>("");
  const [splitExpenses, setSplitExpenses] = useState<string[]>([]);

  const handleExpenseChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTotalExpense(event.target.value);
  };

  const handlePersonsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNumberOfPersons(event.target.value);
  };

  const calculateExpenses = () => {
    const total = parseFloat(totalExpense);
    const persons = parseInt(numberOfPersons);

    if (!isNaN(total) && !isNaN(persons) && total > 0 && persons > 0) {
      const amountPerPerson = total / persons;
      const roundedAmount = amountPerPerson.toFixed(2); // Round to 2 decimal places

      const expenses = new Array(persons).fill(roundedAmount);
      setSplitExpenses(expenses);
    } else {
      // Handle invalid input or edge cases
      setSplitExpenses([]);
    }
  };

  return (
    <div className="h-[80vh]">
      <h2 className="text-center font-bold text-3xl">Split Expenses</h2>
      <div className="max-w-md md:mx-auto mx-10 mt-5 border bg-white shadow-md rounded-xl px-8 py-8">
        <div>
          <input
            className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Enter Total Expense"
            value={totalExpense}
            onChange={handleExpenseChange}
          />
          <input
            className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Enter Number of Persons"
            value={numberOfPersons}
            onChange={handlePersonsChange}
          />
        </div>
      </div>
      <div className="text-center mt-5">
        <button
          onClick={calculateExpenses}
          className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Split
        </button>
      </div>
      <div className="flex justify-center max-w-md md:mx-auto">
        {splitExpenses.length > 0 && (
          <TableContainer component={Paper} className="mt-4">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Person</TableCell>
                  <TableCell>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {splitExpenses.map((amount: any, index) => (
                  <TableRow key={index}>
                    <TableCell>{`Person ${index + 1}`}</TableCell>
                    <TableCell>
                      ₹{Intl.NumberFormat("en-IN").format(amount)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
};

export default Split;
