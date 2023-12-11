import './App.css'

import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom"
import HomePage from './components/HomePage'
import ProductsPage from './components/ProductsPage'
import Header from './components/Header'
import Card from './components/Card'
import ErrorPage from './components/ErrorPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/HomePage' element={<HomePage/>} />
          <Route path='/Products' element={<ProductsPage/>} />
            <Route path='/Products/:id' element={<Card/>}/>
            {/* add error page */}
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
