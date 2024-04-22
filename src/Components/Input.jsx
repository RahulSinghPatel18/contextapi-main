// import React from 'react';

import { useRef } from "react"

// function withCustomInput(InputComponent, placeholder, name) {
//   return function(props) {
//     return <InputComponent {...props} placeholder={placeholder} name={name} />;
//   };
// }

// function MyInput(props) {
//   return <input type="text" {...props} />;
// }

// const CustomInput = withCustomInput(MyInput, "Enter your name", "username");

// function Input() {
//   return (
//     <div>
//       <CustomInput />
//     </div>
//   );
// }

// export default Input;



const Input = (props) => {

  const ShowErr = useRef()
  
  const submithandeler =(e)=>{
    // console.log(e)
    if(ShowErr.current.value.lenght < 4)
    e.style.border = '2px solid red'
    console.log(ShowErr.current.value)
  }
  return (
    <div>
      <input ref={ShowErr} onChange={submithandeler} type="text" placeholder="Enter your name " />
    </div>
  )
}

export default Input
