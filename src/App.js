import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Header from './Components/Header';
import ProductList from './Components/ProductList/ProductList';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductList />
      {/* Other content of your application */}
    </div>
  );
}

export default App;
