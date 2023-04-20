import './styles/App.css';
import {Header} from "./components/Header"
import {Routes, Route} from "react-router-dom"
import { ReviewContainer } from './components/ReviewContainer';
import { FullReview } from './components/FullReview';
import { useState } from 'react';
import { CategoriesContainer } from './components/CategoriesContainer';
import { ReviewsByCategory } from './components/ReviewsByCategory';

function App() {

  const [user, setUser] = useState("tickle122")

  return (
    <div>
      <Header user={user}/>
      <Routes>
        <Route path="/reviews" element={<ReviewContainer/>} />
        <Route path="/reviews/:review_id" element={<FullReview user={user}/>} />
        <Route path="/categories" element={<CategoriesContainer/>}/>
        <Route path="/categories/:category" element={<ReviewsByCategory/>}/>
      </Routes>
    </div>
  );
}

export default App;
