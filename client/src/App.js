import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

//Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
  <Router>
    <Fragment>
     <Navbar/>
     <section className="container">
     <Routes>
         <Route path="/" element={ <Landing/> } />
         <Route path="/register" element={<Register/>} />
         <Route path="/login" element={<Login/>} />
         </Routes>
         </section>
    </Fragment> 
    </Router>
    </Provider>
); 

export default App;
