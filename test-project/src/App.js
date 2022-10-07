import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="content">
          <input class="input" type="text" placeholder="First Name" />
          &nbsp;&nbsp;
          <input class="input" type="text" placeholder="Last Name" />
          <br />
          <br />
          <input class="input" type="text" placeholder="example@gmail.com" />
          <br />
          <br />
          <input class="input" type="number" placeholder="Enter Phone Number" />
          <br />
          <br />
          <input class="input" type="password" placeholder="Enter Password" />
          <br />
          <br />    
          <div>
            <button class="login" type="submit">
              Login
            </button>
            &nbsp;&nbsp;
            <button class="cancel" type="button">
              Cancel
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
