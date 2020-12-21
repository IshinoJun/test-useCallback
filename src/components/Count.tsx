import React from 'react';

interface Props {
  text: string;
  countState: number;
}

// Titleコンポーネント(子)
const Count: React.FC<Props> = (props) => {
  const { text, countState } = props;
  console.log('Count child component', text);

  return (
    <p>
      {text}:{countState}
    </p>
  );
};

export default Count;
