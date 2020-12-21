import React from 'react';

// Titleコンポーネント(子)
const Title: React.FC = React.memo(() => {
  // eslint-disable-next-line no-console
  console.log('Title component');

  return <h2>useCallBackTest vol.1</h2>;
});

export default Title;
