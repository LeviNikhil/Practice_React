import React, { useCallback, useMemo, useState } from "react";
import Counter from "./components/Counter";
import CounterButton from "./components/CounterButton";
import SetCounter from "./components/SetCounter";

function calc(){
  //Expensive Operations
}

function App() {
  console.log("App Rendered");
  const [count,setCount] = useState(0);

  const CalculatedCount=useMemo(()=>calc(count),[count]);
  //console.log("Calculated Count",CalculatedCount);
  const handleIncrement = useCallback(()=>{
     setCount((prev)=> prev+1);
  },[]);

  const handleDecrement = useCallback(()=>{
     setCount((prev)=> prev-1);
  },[]);

  const handleSetCount = (newCount)=>{
     setCount(newCount);
  };

  return (
     <div>
       <Counter count={count}/>
       <CounterButton onButtonClick={handleIncrement}>Increase</CounterButton>
       <CounterButton onButtonClick={handleDecrement}>Decrease</CounterButton>
       <SetCounter onSet={handleSetCount}></SetCounter>
     </div>
  );
}

export default App;
