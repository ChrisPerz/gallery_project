import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Japon1 } from './components/Japon1';
import { Japon2 } from './components/Japon2';
import { Japon3 } from './components/Japon3';
import { Japon4 } from './components/Japon4';
import { Japon5 } from './components/Japon5';
import { Japon6 } from './components/Japon6';
import { Navigation } from './components/Navigation';

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <h1 className='text-center my-3'>Gallery Project</h1>
        </div>
        <div className='container d-flex justify-content-center'>
          <Routes>
            <Route path='/japon1' element={<Japon1 className='main-img-container'/>} />
            <Route path='/japon2' element={<Japon2 className='main-img-container'/>} />
            <Route path='/japon3' element={<Japon3 className='main-img-container'/>} />
            <Route path='/japon4' element={<Japon4 className='main-img-container'/>} />
            <Route path='/japon5' element={<Japon5 className='main-img-container'/>} />
            <Route path='/japon6' element={<Japon6 className='main-img-container'/>} />
          </Routes>
        </div>
        <div className='container'>
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  );
};


export default App
