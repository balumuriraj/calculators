import React from 'react';

// const isOperator = (val: any) => {
//   return !isNaN(val) || val === "." || val === "=";
// }

type IProps = {
  input: string;
  result: string;
}

const Input: React.FC<IProps> = ({input, result}) => {
  return (
    <div className="input-wrapper">
      <div className="input">{input}</div>
      <div className="result">{result}</div>
    </div>
  );
}

export default Input;
