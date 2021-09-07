import './App.css';
import react from 'react';
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import CategoryList from './components/pages/CategoryList';
import Category from './components/pages/Category';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

const App = props => {
  return (
      <div className="container">
        <Router>
          <Header />
          <Route path="/"/>
          <Route path="/details/:food"/>
          <Route path="/categories" component={CategoryList}/>
          <Route path="/categories/:categoryURL/:id" children={<Category/>}/>
          <Route path="/favorites"/>
          <Route path="/random"/>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
