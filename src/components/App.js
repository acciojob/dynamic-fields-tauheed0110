
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [values, setValue] = useState([{
    name: "",
    age: ""
  }]);
  const handleAddMore = (e)=>{
    e.preventDefault();
    setValue([...values, {name:"", age:""}]);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(values);
  }
  function handleNameChange(index, event){
    const newInputFields = [...values];
    newInputFields[index].name = event.target.value;
    setValue(newInputFields);
  }
  function handleAgeChange(index, event){
    const newInputFields = [...values];
    newInputFields[index].age = event.target.value;
    setValue(newInputFields);
  }
  function hanldeRemove(index){
    setValue(values.filter((input, i) => index != i))
  }
  return (
    <div>
        <form>
              {
                values.map((data, index) => {
                  return <div key={index}>
                    <input name="name" placeholder="Name" value={data.name} onChange={(event) => handleNameChange(index, event)}/>
                    <input name="age" placeholder="Age" value={data.age} onChange={(event) => handleAgeChange(index, event)}/>
                    <button onClick={()=>hanldeRemove(index)}>Remove</button>
                </div>
                })
              }
              <button onClick={(e)=> handleAddMore(e)}>Add more..</button>
              <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
    </div>
  )
}

export default App
