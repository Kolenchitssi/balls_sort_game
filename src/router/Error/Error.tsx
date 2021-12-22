import React, { FC, useEffect, useState } from "react";

type PropsType = {
  timer: number;
};

// const Timer = (props: PropsType) => {
//   const { timer } = props;
//   console.log("render div Timer");
//   const [second, setSecond] = useState(10);
//   console.log(" div Timer second=", second);

//   let timerInterval: any;

//   useEffect(() => {
//     console.log("second was changed second=", second);
//     if (second <= 0) {
//       console.log("clearInterval-2 useEffect");
//       return clearInterval(timerInterval);
//     }
//   }, [second]);

//   useEffect(() => {
//     console.log("start use effect Timer");

//     timerInterval = setInterval(() => {
//       console.log("start set Interval second", second);
//       setSecond((prevSecond) => prevSecond - 5);
//     }, 5000);

//     //!НЕ РАБОТАЕТ здесь всегда second =10
//     if (second <= 0) {
//       console.log("clearInterval");
//       return clearInterval(timerInterval);
//     }

//     return () => {
//       console.log("destruct div Timer");
//     };
//   }, [second]);

//   return (
//     <div>
//       <h3>timer: {second}</h3>
//     </div>
//   );
// };

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
      {/* <Timer timer={Number(count)} /> */}
    </div>
  );
};

export default Error;
