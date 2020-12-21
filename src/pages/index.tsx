import * as React from 'react';
import { NextPage } from 'next';
import { useCallback, useState } from 'react';
import Title from '../components/Title';
import Count from '../components/Count';
import Button from '../components/Button';

const Home: NextPage = () => {
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(10);

  // + 1 ボタンのstateセット用関数
  const handleClickFirstCount = useCallback(() => {
    setFirstCount(firstCount + 1);
  }, [firstCount]);

  // + 10 ボタンのstateセット用関数
  const handleClickSecondCounter = useCallback(() => {
    setSecondCount(secondCount + 10);
  }, [secondCount]);

  // 子コンポーネントを呼び出す
  return (
    <>
      <Title />
      <Count text="+ 1 ボタン" countState={firstCount} />
      <Count text="+ 10 ボタン" countState={secondCount} />
      <Button handleClick={handleClickFirstCount} value="+1 ボタン" />
      <Button handleClick={handleClickSecondCounter} value="+10 ボタン" />
    </>
  );
};

export default Home;
