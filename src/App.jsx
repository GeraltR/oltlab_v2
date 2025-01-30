import { Helmet } from "react-helmet";

import "./App.css";

function App() {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "pl" }} />
      <div className="bg-black"></div>
      <h1 className="bg-black">Vite + React</h1>
      <div className="card"></div>
    </>
  );
}

export default App;
