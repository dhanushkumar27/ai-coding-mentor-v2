import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Section from './pages/Section'
import SectionDetails from './pages/SectionDetails'
import NotFound from './pages/NotFound'

import ProtectedRoute from './components/ProtectedRoute'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" 
        element={<ProtectedRoute><Home/></ProtectedRoute>}/>

        <Route exact path="/login" element={<Login/>}/>
        
        <Route exact path="/section" 
        element={<ProtectedRoute><Section/></ProtectedRoute>}/>

        <Route exact path="/section/:id" 
        element={<ProtectedRoute><SectionDetails/></ProtectedRoute>}/>

        <Route exact path="/about" 
        element={<ProtectedRoute><About/></ProtectedRoute>}/>

        <Route exact path="/contact" 
        element={<ProtectedRoute><Contact/></ProtectedRoute>}/>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default App
