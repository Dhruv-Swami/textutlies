import { useState } from "react";
// import { Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import TestForm from "./components/TestForm";
import Alert from "./components/Alert";
import About from "./components/About";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (messasge, type) => {
    setAlert({
      msg: messasge,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Texting - Light Mode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black  ";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Texting - Dark Mode";
    }
  };
  return (
    <div>
      <Router>
        <Navbar title="texting" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <TestForm
                  showAlert={showAlert}
                  heading="Enter the text to below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
