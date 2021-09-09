import './App.css';
import './css/style.css'
import react, { useEffect } from 'react';
import  { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CategoryList from './components/pages/CategoryList';
import Category from './components/pages/Category';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import ListView from './components/pages/ListView'
import Details from './components/pages/Details';
import { FavoriteProvider } from './components/FavoriteContext';
import Favorites from './components/pages/Favorites';


const App = props => {
  return (
      <div className="container">
        <Router>
          <FavoriteProvider >
            <Header />
            <div id="main">
              <Route path="/page/:page">
                <ListView />
              </Route>
            
            <Route path="/categories" component={CategoryList}/>
            <Route path="/categories/:categoryURL/:id" children={<Category/>}/>
            <Route path="/products/:id" children={<Details/>}/>
            <Route path="/favorites" component={Favorites}/>
            <Route path="/random"/>
            </div>
            <Footer />
          </FavoriteProvider>
        </Router>
      </div>
  );
}

export default App;
