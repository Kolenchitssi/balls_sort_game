import React, { FC, useEffect, useState } from "react";

type TypePropsTimer = {
  timer: number;
};

// const n: number = 1_000_000;
// console.log("number=", n / 2);

let timerInterval: any;

const Timer = (props: TypePropsTimer) => {
  const { timer } = props;
  console.log("render div Timer=", timer);
  const [second, setSecond] = useState(5);
  console.log(" div Timer second=", second);

  useEffect(() => {
    console.log("start use effect Timer");

    timerInterval = setInterval(() => {
      console.log("start set Interval second=", second);
      setSecond((prevSecond) => prevSecond - 1);
    }, 1000);

    //!НЕ РАБОТАЕТ здесь всегда second =initValue потомучто оно заходит только 1 раз при первой отрисовке
    if (second <= 0) {
      console.log("clearInterval");
      return clearInterval(timerInterval);
    }
    return () => {
      console.log("destruct div Timer");
      clearInterval(timerInterval);
    };
  }, []);

  useEffect(() => {
    console.log("second was changed second=", second);
    if (second <= 0) {
      console.log("clearInterval-2 useEffect");
      clearInterval(timerInterval);
    }
  }, [second]);

  return (
    <div>
      <h3>timer: {second}</h3>
    </div>
  );
};

type Props = {
  className: String;
};

const Error: FC<Props> = ({ className }) => {
  const [count, setCount] = useState(0);
  const handler = () => {
    setCount(count + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    //setCount(count + 1); // перебьет снова на 1
  };
  return (
    <div className={`${className}`} style={{ display: "block" }}>
      <h1>Error 404</h1>
      <button onClick={handler}>+1</button>
      <h2>{count}</h2>
      <Timer timer={count} />
    </div>
  );
};

export default Error;
