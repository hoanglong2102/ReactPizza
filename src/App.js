import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Feature from './components/Feature';
import Product from './components/Product';
import { productData, productDataTwo } from './components/Product/data';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Product heading='Choose your favorite' data={productData} />
      <Feature />
      <Product heading='Sweet Treats for You' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
