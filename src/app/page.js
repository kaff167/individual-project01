"use client";
import { useState } from "react";

export default function CalculatorApp() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers");
      return;
    }

    switch (operator) {
      case "+":
        setResult(num1 + num2);
        break;
      case "-":
        setResult(num1 - num2);
        break;
      case "*":
        setResult(num1 * num2);
        break;
      case "/":
        if (num2 === 0) {
          alert("Cannot divide by zero");
        } else {
          setResult(num1 / num2);
        }
        break;
      default:
        alert("Please select a valid operator");
        break;
    }
  };

  const resetCalculator = () => {
    setInput1("");
    setInput2("");
    setOperator("");
    setResult(null);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-red-500">Kalkulator Sederhana</h1>
      <div className="flex flex-col space-y-3 w-80">
        <input
          type="number"
          placeholder="Angka pertama"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          className="p-2 border rounded-md"
        />
        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="">Pilih Operator</option>
          <option value="+">Tambah (+)</option>
          <option value="-">Kurang (-)</option>
          <option value="*">Kali (*)</option>
          <option value="/">Bagi (/)</option>
        </select>
        <input
          type="number"
          placeholder="Angka kedua"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          className="p-2 border rounded-md"
        />
        <button
          onClick={handleCalculate}
          className="p-2 bg-blue-500 text-white rounded-md"
        >
          Hitung
        </button>
        {result !== null && (
          <div className="p-2 border rounded-md bg-gray-200 text-center">
            Hasil: {result}
          </div>
        )}
        <button
          onClick={resetCalculator}
          className="p-2 bg-red-500 text-white rounded-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
