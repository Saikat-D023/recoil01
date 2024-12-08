import { useState } from 'react'
import './App.css'
import { RecoilRoot, useSetRecoilState, atom, useRecoilValue } from 'recoil'
import { counterAtom } from './store/atoms/counter'

function App() {

  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  )
}

function Counter(){

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
