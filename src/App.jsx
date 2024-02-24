import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("orange")
  return (
    <div className="w-full h-screen duration-75"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
        <div className="flex flex-wrap justify-center  px-2 gap-3 bg-slate-50 rounded-lg">
          <button
            onClick={() => { setColor("red") }}
            className=" bg-red-600 px-3 py-2 mx-1 my-2 rounded-md text-white "
          >Red</button>
          <button
            onClick={() => { setColor("green") }}
            className=" bg-green-600 px-3 py-2 mx-1 my-2 rounded-md text-black "
          >Green</button>
          <button
            onClick={() => { setColor("blue") }}
            className=" bg-blue-600 px-3 py-2 mx-1 my-2 rounded-md text-black"
          >Blue</button>
          <button
            onClick={() => { setColor("yellow") }}
            className=" bg-yellow-600 px-3 py-2 mx-1 my-2 rounded-md text-black "
          >Yellow</button>
          <button
            onClick={() => { setColor("pink") }}
            className=" bg-pink-600 px-3 py-2 mx-1 my-2 rounded-md text-black "
          >Pink</button>
           <button
            onClick={()=>{setColor("lime")}} 
            className=" bg-lime-600 px-3 py-2 mx-1 my-2 rounded-md text-black " 
             >Lime</button>
              <button
            onClick={()=>{setColor("Violet")}} 
            className=" bg-violet-600 px-3 py-2 mx-1 my-2 rounded-md text-white " 
             >Violet</button>
        </div>
      </div>
    </div>

  )
}

export default App
