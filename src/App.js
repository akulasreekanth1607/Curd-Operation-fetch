import logo from './logo.svg';
import './App.css';
import Crud from './Crud';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavCrud from './CrudRouting/NavCrud';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetProducts from './CrudRouting/GetProducts';
import AddProduct  from './CrudRouting/AddProduct';
import UpdateProduct from './CrudRouting/UpdateProduct';


function App() {
  return (
    <div className="App">
     {/* <Crud/> */}
    

    
     <BrowserRouter>
     <NavCrud/>
            <Routes>
              <Route path='/get-products' element={<GetProducts/>}></Route>
              <Route path='/add-products' element={<AddProduct/>}></Route>
              <Route path='/update-product/:id/:name/:price' element={<UpdateProduct/>}></Route>
            </Routes>
          
     </BrowserRouter>

    </div>
  );
}

export default App;
