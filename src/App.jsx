import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Product from './components/Product/Product'
import ProductDetail from './components/Product/ProductDetail'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='product' element={<Product />} />
        <Route path='product/:productName' element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}

export default App
