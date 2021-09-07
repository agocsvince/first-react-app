import './App.css';
import react from 'react';
import  { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/"/>
        <Route path="/details/:food"/>
        <Route path="/categories"/>
        <Route path="/favorites"/>
        <Route path="/random"/>
      </Router>

    </div>
  );
}

export default App;
