import {BrowserRouter,Routes,Route} from  'react-router-dom'
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Register from './pages/Register';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>


      
    </Routes>
    
    </BrowserRouter>
    

    </>
  );
}

export default App;
