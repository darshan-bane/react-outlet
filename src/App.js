import './App.css';
import About from './component/About';
import Blog from './component/Blog';
import Home from './component/Home';
import Navbar from "./component/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NTS from './component/NTS';
import AboutMe from './component/AboutMe';
import TS from './component/TS';
import Crud from './component/Crud';
import ErrorPage from './component/ErrorPage';


function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />}>
            <Route index element={<AboutMe />} />
            <Route path='/about/ts' element={<TS />} />
            <Route path='/about/nts' element={<NTS />} />
          </Route>
          <Route path='/blog' element={<Blog />} />
          <Route path='/crud' element={<Crud />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
