import './App.css';
//import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Main from './Components/Main/Main';
import BlogContainer from './Components/BlogContainer/BlogContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Faq from './Components/Faq/Faq';
import Form from './Components/Form/Form';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<BlogContainer/>}/>
          <Route path='/:categoryId/:subcategoryId' element={<ItemListContainer/>}/>
          <Route path='/faq' element={<Faq/>}/>
          <Route path='/contacto' element={<Form/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
