import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import AddPro from "./components/AddPro";
import UpdatePro from "./components/UpdatePro";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Routes>
          <Route exact path= "/login" element={ <Login/>} />
          <Route exact path= "/register" element={ <Register/>} />
          <Route exact path= "/add" element={ <AddPro/>} />
          <Route exact path= "/update" element={ <UpdatePro/>} />
               </Routes>
      </Router>
    </div>
  );
}

export default App;
