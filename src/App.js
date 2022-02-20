import React from 'react';
import './styles/App.css';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import MainWindow from "./pages/MainWindow";
import RegistrationWindow from "./pages/RegistrationWindow";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="MainWindow" element={<MainWindow/>}/>
          <Route path="RegistrationWindow" element={<RegistrationWindow/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
