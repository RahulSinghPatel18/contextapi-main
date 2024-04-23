

import React, { useRef } from 'react'

const Input = (props) => {
    let show = useRef()

    const change = (e)=>{
        const inp = show.current
        if(inp.value.length <  8){
            console.log(inp)
            inp.style.border = '1px solid red'
            // inp.className='border-[1px] border-red-400]'
        }
        else{
            inp.style.border = '1px solid black'
        }
    }

  return (
  <>
 <div style={{textAlign:'center'}}>
 <input style={{border:"2px solid black",padding:'6px', borderRadius:"5px"}} onChange={change} ref={show} placeholder='enter name here'  className='outline-none' {...props}/>
  
 </div>
  </>
  )
}

export default Input
