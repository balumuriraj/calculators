import React from 'react';

const isOperator = (val: any) => {
  return !isNaN(val) || val === "." || val === "=";
}

type IProps = {
  handleClick: (children: any) => void,
  value: string
}

const Button: React.FC<IProps> = ({ value, handleClick, children }) => {
  return (
    <div className={`button-wrapper ${isOperator(value) ? null : "operator"}`} onClick={() => handleClick(value)}>
      {children}
    </div>
  );
}

export default Button;
