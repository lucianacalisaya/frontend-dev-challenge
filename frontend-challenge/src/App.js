import './scss/style.scss';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import BlogContainer from './Components/BlogContainer/BlogContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <header className='App-header'>
          <Navbar/>
        </header>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<BlogContainer/>}/>
          <Route path='/:categoryId/:subcategoryId' element={<ItemListContainer/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
