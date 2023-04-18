import './styles/App.css';
import {Header} from "./components/Header"
import {Routes, Route} from "react-router-dom"
import { ReviewContainer } from './components/ReviewContainer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/reviews" element={<ReviewContainer/>} />
      </Routes>
    </div>
  );
}

export default App;
