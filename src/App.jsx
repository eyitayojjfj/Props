import { useState } from "react";
import CustomButton from "./component/CustomButton"
import { MdNavigateNext } from "react-icons/md";
import {  } from "react";

function App() {
  //COMPONNENT STATE
  const [counter, setCounter] = useState(0);

    // handle login
    const handleLogin = () => {
       setCounter(counter + 1);
    };

    // handle signup
    const handleSignup = () => {
      setCounter(counter - 1);
   };

  return (
    <>
     <h1>Custom-Btn Reusable Component</h1>
     <h2>Counter : {counter}</h2>
     <nav  bgColor="lightgray">
      <ul>
        <li>Colors</li>
        <li>Typography</li>
        <li>Spaces</li>
        <li>Buttons</li>
        <li>Inputs</li>
        <li>Grid</li>
      </ul>
      </nav>
     
    <div>
    <CustomButton bgColor="lightgray" txColor="black"></CustomButton>
    <CustomButton bgColor="darkgray" txColor="black"></CustomButton>
    </div>
    <div>
    <CustomButton bgColor="red"></CustomButton>
    <CustomButton bgColor="red"></CustomButton>
    </div>
     <div>
      <CustomButton btnFunc={handleLogin} >Increment</CustomButton>
      <CustomButton bgColor="white" txColor="black" btnBorder="2px solid black" btnFunc={handleSignup} >
      Decrement  {" "}
       <span>
      <MdNavigateNext />
      </span>
      </CustomButton>
      </div>
      <CustomButton />
      <div>
      <CustomButton bgColor="blue" >Sign Up</CustomButton>
      <CustomButton bgColor="grey" >Login</CustomButton>
     </div>

     <div>
     <CustomButton bgColor="yellow">Success</CustomButton>
     <CustomButton bgColor="green">Warning</CustomButton>
     <CustomButton bgColor="red"></CustomButton>
     </div>

     <div>
     <CustomButton bgColor="yellow">Success</CustomButton>
     <CustomButton bgColor="green">Warning</CustomButton>
     <CustomButton bgColor="red"></CustomButton>
     <CustomButton bgColor="orange"></CustomButton>
     </div>

     <div>
     <CustomButton bgColor="grey">Success</CustomButton>
     <CustomButton bgColor="blue">Warning</CustomButton>
     <CustomButton bgColor="red"></CustomButton>
     <CustomButton bgColor="darkred"></CustomButton>
     </div>
    </>
  )
}

export default App
