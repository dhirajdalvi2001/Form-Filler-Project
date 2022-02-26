import Header from "./Header";
import Body from "./Body";
import { BrowserRouter } from "react-router-dom";
import { useState, createContext } from "react";

export const loginContext = createContext(); 

function App() {
  const [login, setLogin] = useState(false);

  const changeLogin = (v) => {
    setLogin(v);
  };
  return (
    <>
    <loginContext.Provider value={{ login, changeLogin }}>
      <BrowserRouter>
        <Header />
        <Body />
      </BrowserRouter>
     </loginContext.Provider>
    </>
  );
}

export default App;
