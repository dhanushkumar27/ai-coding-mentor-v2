import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'

import Section from './pages/Section'

import NotFound from './pages/NotFound'

import ProtectedRoute from './routes/ProtectedRoute'

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

        


        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default App
