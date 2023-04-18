import './styles/App.css';
import {Header} from "./components/Header"
import {Routes, Route} from "react-router-dom"
import { ReviewContainer } from './components/ReviewContainer';
import { FullReview } from './components/FullReview';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/reviews" element={<ReviewContainer/>} />
        <Route path="/reviews/:review_id" element={<FullReview />} />
      </Routes>
    </div>
  );
}

export default App;
