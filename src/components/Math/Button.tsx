import React from 'react';

// const isOperator = (val: any) => {
//   return !isNaN(val) || val === "." || val === "=";
// }

type IProps = {
  handleClick: (children: any) => void
}

const Button: React.FC<IProps> = ({ handleClick, children }) => {
  return (
    <div className="button-wrapper" onClick={() => handleClick(children)}>
      {children}
    </div>
  );
}

export default Button;
