import './App.css';
import react from 'react';
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layouts/Header';

const App = props => {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Header />
          <Route path="/"/>
          <Route path="/details/:food"/>
          <Route path="/categories"/>
          <Route path="/favorites"/>
          <Route path="/random"/>
        </Router>
      </div>
    </div>
  );
}

export default App;
