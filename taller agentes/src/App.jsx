import { useEffect, useState } from 'react'
import ContainerCard from "./Cards"
import SearchBar from './Input'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState("");
  function handleInputChange(value) {
    setText(value);
  }
  return (
    <>
      <Nav text={text} handleInputChange={handleInputChange}></Nav>
      <Body text={text}> </Body>

    </>)
}

function Nav({ text, handleInputChange }) {


  return (<>

    <div className='bg-stone-400 w-full h-32'>
      <SearchBar searchText={text} handleInputChange={handleInputChange}></SearchBar>
    </div>
  </>)
}

function Body({text }) {
  return (<>

    <div className='bg-orange-200 w-full h-screen'>
      <ContainerCard text={text}></ContainerCard>
    </div>


  </>)
}





export default App
