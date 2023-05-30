import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import NftPro from './Pages/NftPro';


function App() {
  return (
<>  <Router>
    <Routes>
    <Route  exact path='/' element={<Home/>}  />
    <Route  exact path='/nft-profile' element={<NftPro/>}  />

    </Routes>
    </Router></>
  
   
  );
}

export default App;
