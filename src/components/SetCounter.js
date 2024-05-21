import {useState} from 'react'

const SetCounter = ({onSet}) => {

console.log("SET-COUNTER RENDERED");
const [enteredCount,setEnteredCount] = useState(0);

const handleEnteredCountChange = (event)=>{
    setEnteredCount(event.target.value);
  };

  return (
     <div>
        <input type="number"
          value={enteredCount}
          onChange={handleEnteredCountChange}
        />
      <button onClick={()=>onSet(enteredCount)}>SetCount</button>
      </div>
  )
}

export default SetCounter