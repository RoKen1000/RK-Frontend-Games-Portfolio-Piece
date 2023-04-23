import './styles/App.css';
import { Header } from "./components/Header"
import { Routes, Route, useLocation } from "react-router-dom"
import { ReviewContainer } from './components/ReviewContainer';
import { FullReview } from './components/FullReview';
import { useState } from 'react';
import { CategoriesContainer } from './components/CategoriesContainer';
import { BadPathError } from './components/BadPathError';
import { LandingPage } from './components/LandingPage';

function App() {

  const [user, setUser] = useState("tickle122")
  
  const location = useLocation()

  return (
    <div>
      {location.pathname !== "/" ? <Header user={user}/> : null}
      <Routes>
        <Route path="*" element={<BadPathError/>}/>
        <Route path="/" element={<LandingPage user={user}/>} />
        <Route path="/reviews" element={<ReviewContainer/>} />
        <Route path="/reviews/:review_id" element={<FullReview user={user}/>} />
        <Route path="/categories" element={<CategoriesContainer/>}/>
        <Route path="/reviews/categories/:category" element={<ReviewContainer/>}/>
        <Route path="/reviews/search?sort_by=date&order=asc" element={<ReviewContainer/>}/>
      </Routes>
    </div>
  );
}

export default App;
