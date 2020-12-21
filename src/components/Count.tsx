import React from 'react';

interface Props {
  text: string;
  countState: number;
}

const Count: React.FC<Props> = React.memo((props) => {
  const { text, countState } = props;
  // eslint-disable-next-line no-console
  console.log('Count child component', text);

  return (
    <p>
      {text}:{countState}
    </p>
  );
});

export default Count;
