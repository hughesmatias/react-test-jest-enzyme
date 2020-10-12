import React from 'react';
import Header from './components/header';
import Footer from './components/footer'; 

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        Container
      </div>
      <Footer />
    </div>
  );
}

export default App;
