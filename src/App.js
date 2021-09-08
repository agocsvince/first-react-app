import './App.css';
import './css/style.css'
import react, { useEffect } from 'react';
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import CategoryList from './components/pages/CategoryList';
import Category from './components/pages/Category';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import ListView from './components/pages/ListView'
import PageContext from './components/pages/ListView';

const App = props => {
  let currentPage = 1

  const nextPage = e => {
    currentPage++
  }

  const prevPage = e => {
    currentPage--
  }

  return (
      <div className="container">
        <Router>
          <Header />
          <div id="main">
            <Route path="/">
              <div className="grid">
                <ListView page={currentPage}/>
              </div>
              <button onClick={prevPage}>Prev</button>
              <button onClick={nextPage}>Next</button>
            </Route>
          </div>
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
