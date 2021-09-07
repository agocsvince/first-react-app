import './App.css';
import react from 'react';
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import ListView from './components/pages/ListView'

const App = props => {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Header />
          <Route path="/" component={ListView}/>
          <Route path="/details/:food"/>
          <Route path="/categories"/>
          <Route path="/favorites"/>
          <Route path="/random"/>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
