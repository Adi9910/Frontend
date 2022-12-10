import { Component } from "react";
import Plan from "./Plan";
class App extends Component {
  state = {
    items: [],
    text: "",
  };
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  handleClick = (e) => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
    }
  };
  render() {
    return (
      <>
        <div>TOPIC</div>
        <input
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="write something"
        />&nbsp;
        <button type="button" onClick={this.handleClick}>
          ADD
        </button>
        <div>
        {this.state.items.map((val,i)=>{
          return<Plan value={val} />
        })}
        </div>
      </>
    );
  }
}
export default App;
