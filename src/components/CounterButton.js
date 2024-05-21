function CounterButton({children,onButtonClick}){
   console.log("CounterButton-Rendered")
   return <button onClick={onButtonClick}>{children}</button>
};

export default CounterButton;