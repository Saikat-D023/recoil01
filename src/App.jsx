import { useState, useEffect, memo } from 'react'
import './App.css'
import { RecoilRoot, useSetRecoilState, atom, useRecoilValue } from 'recoil'
import { counterAtom } from './store/atoms/counter'

function App() {

  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
    //<Counter />
  )
}

function Counter(){
    const [count, setCount] = useState(0)
    
    useEffect(() => {
      setInterval(() => {
        setCount(c => c + 1)
      }, 3000)
    }, []);

    return <div>
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
}



function CurrentCount(){
  //this comp has now subscribed to the value of the atom
   const count = useRecoilValue(counterAtom) 
    
   return <div>
    {count}
   </div> 
}

//memoized decrease function
function Decrease(){
  //this comp is subscribed to the setter
  const setCount = useSetRecoilState(counterAtom)

  function decrease(){
    setCount(c => c - 1)
  }

  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}

//raw increase function
function Increase(){
  //this comp is also subscribed to the setter of the atom
  const setCount = useSetRecoilState(counterAtom)

  function increase(){
    setCount(c => c + 1)
  }

  return <div>
    <button onClick={increase}>Increase</button>
  </div>
}

export default App
