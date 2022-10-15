import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="head">MY-REACT.....  APP</div>
      <div className="App-div">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="content">
          <input class="input" type="text" placeholder="example@gmail.com" />
          <br />
          <br />
          <input class="input" type="text" placeholder="Enter Phone Number" />
          <br />
          <br />
          <div class="lower">
            <button class="login" type="submit">
              LOGIN
            </button>
            &nbsp;&nbsp;
            <button class="reg" type="button">
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
