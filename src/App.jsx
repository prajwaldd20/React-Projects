import { useCallback, useState, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setLength] = useState(8)
  const [charAllowed, setCharAllowed] = useState(false)
  const [numAllowed, setNumAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "_!@#$%&"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor((Math.random() * str.length + 1))
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  useEffect(()=>
  {
    passwordGenerator()
  },[numAllowed, charAllowed, passwordGenerator, length])
 const copyPassToClipboard= useCallback(()=>
 {
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,100)
  window.navigator.clipboard.writeText(password);
 }, [password])

  return (
    <div className=' w-full max-w-md  bg-slate-500 px-4  py-3 mx-auto  shadow-md my-8 text-black-400 rounded-md'>
      <h1 className=' text-2xl text-center my-3'>Password Generator</h1>
      <div className=' flex shadow-sm rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button 
        onClick={
          copyPassToClipboard
        }
        className='outline-none bg-orange-700 text-black px-3 py-0.5 shrink-0 hover:bg-orange-400'>Copy</button>
      </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type='range'
            min={6}
            max={80}
            value={length}
            className=' cursor-pointer'
            onChange={(e)=>
            {
              setLength(e.target.value)
            }}
            />
            <label >Length  <span className=' text-orange-800 font-semibold'>{length}</span></label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={numAllowed}
            id='numInput'
            onChange={()=>
            {
              setNumAllowed((prev)=> !prev)
            }}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={charAllowed}
            id='characterInput'
            onChange={()=>
            {
              setCharAllowed((prev)=> !prev)
            }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    
  )
}

export default App
