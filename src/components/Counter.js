//Mtd-1
//Memo used to avoid unnecessary re-rendering But dont overuse Memo
//Memo compares if its prop changes then only it will render
//Comparison add extra complexity

//Mtd-2
//Restructure the components so that only necessary componets
//gets Rendered
function Counter({count}){
   console.log("Counter-Rendered");
   return <h1>Counter : {count}</h1>;
};
export default Counter;