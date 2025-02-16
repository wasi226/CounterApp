import React, { useState } from 'react'

const App = () => {

  const [value, setValue] = useState(0)

  const increment=()=>{
     setValue(value+1)
  }


  const decrement=()=>{
    setValue(value-1)
  }

  const jumpby100=()=>{
    setValue(value+100)
  }

  const backBy100=()=>{
    setValue(value-100)
  }

  const reload=()=>{
    window.location.reload()
  }
  return (
    <div className='counterbg w-full h-screen bg-green-400 flex items-center justify-center'>
      <div className='operationArea w-[20%] h-[65%] bg-white rounded-md flex  items-center flex-col p-3'>
        <div className='screen w-[95%] h-[60%] bg-gradient-to-t from-[#F2EF60] to-[#CEFF5D] mt-2 flex items-center justify-center rounded-lg mb-2'>
            <h1 className='text-white font-semibold text-4xl'>{value}</h1>
        </div>
        <button onClick={increment} className='button1 p-1 bg-blue-500 text-white rounded-lg active:scale-95 w-[80%] mt-1 hover:bg-blue-600'>Increment</button>
        <button onClick={decrement} className='button2 p-1 bg-blue-500 text-white rounded-lg active:scale-95 w-[80%] mt-1 hover:bg-blue-600'>Decrement</button>
        <button onClick={jumpby100} className='button3 p-1 bg-blue-500 text-white rounded-lg active:scale-95 w-[80%] mt-1 hover:bg-blue-600'>Jump by 100</button>
        <button onClick={backBy100} className='button4 p-1 bg-blue-500 text-white rounded-lg active:scale-95 w-[80%] mt-1 hover:bg-blue-600'>Back by 100</button>
        <button onSubmit={()=>{}} onClick={reload} className='button5 p-1 bg-blue-500 text-white rounded-lg active:scale-95 w-[80%] mt-1 hover:bg-blue-600'>Reload</button>
      </div>
      
    </div>
  )
}

export default App
