import "./App.css";
import UseEffectComponent from "./components/UseEffectComponent";
import UseStateComponent from "./components/UseStateComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <UseStateComponent subTitle="This is a subtitle!" /> */}
        <UseEffectComponent />
      </header>
    </div>
  );
}

export default App;
