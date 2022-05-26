import { EthProvider } from "./contexts/EthContext";
import "./App.css";

function App() {
  return (
    <EthProvider>
      <div id="App" >
      </div>
    </EthProvider>
  );
}

export default App;
