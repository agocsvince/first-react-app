import './App.css';
import react from 'react';
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import CategoryList from './components/pages/CategoryList';
import Category from './components/pages/Category';

const App = props => {
  return (
    <div className="App">
      <Router>
        <Route path="/"/>
        <Route path="/details/:food"/>
        <Route path="/categories" component={CategoryList}/>
        <Route path="/categories/:categoryURL/:id" children={<Category/>}/>
        <Route path="/favorites"/>
        <Route path="/random"/>
      </Router>

    </div>
  );
}

export default App;
