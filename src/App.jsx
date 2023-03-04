import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <div className="App">
      <div className="gradient-blob blob-top" />
      <h1>
        React <span className="gradient-text">YRHacks</span> Workshop
      </h1>
      <Card title="Hello" content="hi" />
      <Card title="Hello" content="hi" />
      <Card title="Hello" content="hi" />
    </div>
  );
}

export default App;
