import { useEffect, useState } from 'react'
import ContainerCard from "./Cards"
import SearchBar from './Input'
import CheckBoxFilter from './CheckBox'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState("");
  const [selectedRoles, setSelectedRoles] = useState([]);
  function handleInputChange(value) {
    setText(value);
  }

  function handleRoleChange(role){
    setSelectedRoles((prevRoles) =>
      prevRoles.includes(role)
        ? prevRoles.filter((r) => r !== role)
        : [...prevRoles, role]
    );
  }


  return (
    <>
      <Nav text={text} handleInputChange={handleInputChange}>
      </Nav>
      <CheckBoxFilter selectedRoles={selectedRoles} handleRoleChange={handleRoleChange} />
      <Body text={text} selectedRoles={selectedRoles}> </Body>

    </>)
}

function Nav({ text, handleInputChange }){return (<>

    <div className='bg-stone-400 w-full h-32'>
      <SearchBar searchText={text} handleInputChange={handleInputChange}></SearchBar>
    </div>
  </>)
}

function Body({text, selectedRoles}) {
  return (<>
    <div className='bg-orange-200 w-full h-screen'>
      <ContainerCard text={text} selectedRoles={selectedRoles}></ContainerCard>
      
    </div>


  </>)
}





export default App
