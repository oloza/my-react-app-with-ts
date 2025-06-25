import Button from "./components/Button"
import './App.css'

function App() {
  const handleClick=()=>alert("clicking")
  return <Button onclick={handleClick} label={"text"} />
  
}

export default App
