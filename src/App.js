import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-div">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="content">
          <input class="input" type="text" placeholder="Name" />
          <br />
          <br />
          <input class="input" type="text" placeholder="example@gmail.com" />
          <br />
          <br />
          <input class="input" type="text" placeholder="Enter Phone Number" />
          <br />
          <br />    
          <div>
            <button class="login" type="submit">
              REGISTER
            </button>
            &nbsp;&nbsp;
            <button class="cancel" type="button">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
