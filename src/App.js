import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home'
// import About from './components/About'
import Buy from './components/Buy'
// import Notfound from './components/Notfound'


function App() {
  return (
    <BrowserRouter>
    
    <Routes>

      <Route  path='/' element={<Home/>}/>
      
      <Route exact path='/Buy' element={<Buy/>}/> 

      {/* <Route exact path='/about' component={About}/>


      {/* <Route path='/Notfound' component={Notfound}/> */}

    </Routes>
    
    </BrowserRouter>

  );
}

export default App;
