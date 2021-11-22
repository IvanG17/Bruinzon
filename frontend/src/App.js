import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screen/homescreen'
import ProductScreen from './screen/ProductScreen'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className= 'py-3'>
        <Container> 
          <Routes>
            <Route path='/' element={<HomeScreen/>} exact />
            <Route path='/products/:id' element={<ProductScreen/>}/>
            
          </Routes>
          
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
