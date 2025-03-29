import './App.css'
import Home from './pages/Home'
import MovieCard from './components/MovieCard'
import { Routes, Route } from 'react-router-dom' 
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'

function App() {        //app is a component , they always start with capital letter
  return (
    <div>
      <NavBar />
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Favorites' element={<Favorites />}/>
      </Routes>
    </main>
    </div>
  )
}

export default App
