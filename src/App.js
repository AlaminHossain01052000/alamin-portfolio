import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects/Projects';
import ProjectDetails from './Pages/Projects/ProjectDetails/ProjectDetails';
import Blogs from './Pages/Home/Blogs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectDetails/:id" element={<ProjectDetails />} />
          <Route path="/blogs" element={<Blogs />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
