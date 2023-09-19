import { BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react'
import Home from './component/Home'
import './App.css'
import Recipes from './component/Recipes'
import Navbar from './pages/Navbar'




function App() {

  
  return (
    <main className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Recipes" element={<Recipes />}/>
          </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
