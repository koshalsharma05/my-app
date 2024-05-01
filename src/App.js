import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Panels from "./Componet/Panels";
import PanelTwo from "./Componet/Panels/Pannel2";
import PanelOne from "./Componet/Panels/Pannel1";

function App() {
  return (
    <>
      <Routes>
        <Route path="/panel" element={<Panels />} />
        <Route path="/panel1" element={<PanelOne />} />
        <Route path="/panel2" element={<PanelTwo />} />
      </Routes>
    </>
  );
}

export default App;
