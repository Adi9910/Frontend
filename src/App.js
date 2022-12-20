import DemoInput from "./DemoInput";
import './app.css';
import Uniq from "./Uniq";

function App() {
  const hype="GOD"
  return (
    <div className="App">
      <h1>Enter Family Names</h1>
      <DemoInput className="input" />
      <Uniq diff={hype}/>
    </div>
  );
}

export default App;
