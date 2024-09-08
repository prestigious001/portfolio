import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Blog from './Pages/Blog';
import Hobbies from './Pages/Hobbies';

function App() {
  return (
    <div className='p-6  overflow-x-hidden bg-gray-900'>
      
      <Router>
        <NavBar />
        
        <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/contact' element={<Contact/>}/> 
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/hobbies' element={<Hobbies/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
