import Header from "./Header";
import Body from "./Body";
import { BrowserRouter } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import UpArrow from "./UpArrow";
import { BASE_URL, ACCESS_TOKEN, setToken } from "../DataFetchUtils";

export const loginContext = createContext();

function App() {
  const [login, setLogin] = useState(false);

  const changeLogin = (v) => {
    setLogin(v);
  };

  useEffect(async () => {
    console.log("Here");
    let res = await fetch(BASE_URL + "/refresh_token", {
      // mode: "cors",
      credentials: "include",
    });
    console.log(JSON.stringify(res));
    let tok = await res.json();
    console.log(tok);
    if (tok.token !== "") {
      setToken(tok.token);
      setLogin(true);
    } else {
      setToken("");
      setLogin(false);
    }

    // console.log(login);
  }, []);
  return (
    <>
      <loginContext.Provider value={{ login, changeLogin }}>
        <BrowserRouter>
          <Header />
          <Body />
          <UpArrow />
        </BrowserRouter>
      </loginContext.Provider>
    </>
  );
}

export default App;
