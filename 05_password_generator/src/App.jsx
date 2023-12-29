import { useCallback,useEffect,useState,useRef} from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [symbolAllowed, setSymbolAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)
  // const copyRef = useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed) str+="0123456789"
    if(symbolAllowed) str +="!@#$%^&*()_+[]~`{}"
    for(let i=1;i<length;i++){
      pass+=str.charAt(Math.floor(Math.random()*str.length))
    
    }
    setPassword(pass)
  }
    
    
    
    
    ,[length,numberAllowed,symbolAllowed,setPassword])

    // passwordGenerator()
    useEffect(()=>{
      passwordGenerator()
    },[length,numberAllowed,symbolAllowed,passwordGenerator])

    const CopyPasswordToClipboard= useCallback(()=>{
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,length);
      window.navigator.clipboard.writeText(password)
    },[password,length])

  return (
    <>
    {/* <h1 className='text-5xl text-center my-3.5 text-pink-400'>Password Generator</h1> */}
    <div className='w-full max-w-md mx-auto shadow-md h-32  rounded-lg px-4 my-8 text-center text-pink-500 bg-gray-200'>
    <h1 className='text-4xl text-center my-3.5 text-pink-600'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
      value={password}
      className='outline-none bg-yellow-100 text-green-900 w-full py-1 px-3' 
      placeholder='password'
      readOnly
      ref={passwordRef}/>
      <button
      onClick={CopyPasswordToClipboard}
      className='outline-none bg-blue-100  text-yellow-900 py-0.5 px-3 shrink-0.5'
      >COPY</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-3'>
          <input type="range" min={8} max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}} />
          <label className='text-blue-900'>Length:{length}</label>
        </div>

        <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput" className='text-blue-900'>Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={symbolAllowed}
              id="characterInput"
              onChange={() => {
                  setSymbolAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput" className='text-blue-800'>Characters</label>
      </div>
      </div>
    </div>
    
    </>
      
    
  )
}

export default App
