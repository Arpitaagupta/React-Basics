import React, { useState } from 'react'
import FirstComponent from './components/firstComponent';
import SecondComponent from './components/secondComponent';
let x = 0;
// let x = "Open Source";
// let array = ["user1", "user2", "user3", "user4", "user5"];
// let data = "Girl";
//Conditional Redendering
//comparing data using the ternary operator
const App = () => {

  
  const [x, setx] = useState(0)
//how to pass data from one component to another component
    //--> to pass the value in first component, we use props
  const btnClick = () => {
    console.log("Clicked");
    setx(x+1);  //to increment value of click
    console.log(x);
  }

  return (
    <div>
    {/* { x }
      {
        array.map((user) => {
          return (
            <h2>
              {user}
            </h2>
          );
        })
        
      } */}
      {/*
      Conditional Redenering using Ternary Operation
      {data=="boy"? <h1>Boy</h1> :   <h1>Girl</h1> } */}
      
     {/* Event Handling */}
     
      <button onClick={btnClick}>Click Me</button>
      <FirstComponent data={x} fn={setx}/>
      <SecondComponent/>
    </div>
  )
}

export default App