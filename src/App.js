import "./App.css";
import { Header } from "./components/Header";
import { AllRoutes } from "./Routes/AllRoutes";
function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
