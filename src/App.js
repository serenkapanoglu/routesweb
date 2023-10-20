import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import BookRoutes from './BookRoutes';


function App() {
 return(
  <div>

    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/books'>Book</Link>
        </li>
      </ul>
    </nav>
    <Routes>
    <Route path="/" element={<Home />} />
  <Route path="/books/*" element={<BookRoutes />} />
  <Route path="*" element={<NotFound />} />
</Routes>
  </div>
 )
}


export default App;
