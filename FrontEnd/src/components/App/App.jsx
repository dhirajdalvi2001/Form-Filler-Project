import "./App.css";
import Header from "../Header/Header";
import Body from "../Body/Body";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Body />
      </BrowserRouter>
    </div>
  );
}

export default App;
