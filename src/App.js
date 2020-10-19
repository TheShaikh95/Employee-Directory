import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Content from './components/mainContent';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Header/>
        <div id="main-content">
          <Content/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;