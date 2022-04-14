import './App.css';
import Card from "./components/Card"
import dataElements from "./data"
import Navbar from "./components/Navbar";

function App() {
  const cards = dataElements.map(element => {
    return <Card {...element} />
  })
  return (
      <div>
        <Navbar />
        {cards}
      </div>
  )
}

export default App;
