import React from 'react';

// const isOperator = (val: any) => {
//   return !isNaN(val) || val === "." || val === "=";
// }

type IProps = {
  input: string;
}

const Input: React.FC<IProps> = ({input}) => {
  return (
    <div className="input-wrapper">
      {input}
    </div>
  );
}

export default Input;
