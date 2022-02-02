import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Body from "../Body/Body";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Body />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
