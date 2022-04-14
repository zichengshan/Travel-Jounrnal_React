import './App.css';
import Card from "./components/Card"
import dataElements from "./data"

function App() {
  const cards = dataElements.map(element => {
    return <Card {...element} />
  })
  return (
      <div>
        {cards}
      </div>
  )
}

export default App;
