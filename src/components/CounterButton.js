import { memo } from "react";
//Memo Detects Changes in Props
//since the props in this Counter button is function so it
//will be automatically called whenever we refresh page
//bcz on every refresh cycle new function is created
//To prevent this we use USECALLBACK Hook
//It accepts two parameters [function,[array that we will change]]

const CounterButton=memo(function CounterButton({children,onButtonClick}){
   console.log("CounterButton-Rendered")
   return <button onClick={onButtonClick}>{children}</button>
});

export default CounterButton;