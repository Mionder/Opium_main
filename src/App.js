import React from 'react';
import "./reset.css";
import './App.css';
import MainPage from "./Components/MainPage/MainPage";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Error404 from "./Components/Error404/Error404";
import BlogPage from "./Components/BlogPage/BlogPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route  path="/" component={MainPage} exact/>
        <Route  path="/error" component={Error404} exact/>
        <Route path="/blog" component={BlogPage} exact />
      </div>
    </Router>
  );
}

export default App;
