import React from 'react';

interface Props {
  handleClick: () => void;
  value: string;
}

// Titleコンポーネント(子)
const Button: React.FC<Props> = (props) => {
  const { handleClick, value } = props;
  console.log('Button child component', value);

  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Button;
