import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Signin from './Components/Signin';
import Login from './Components/Login';
import Home from './Components/Home';
import Cards from './Components/Cards';
import Sufg from './Components/Sufg';
import { AdminPanelSettings } from '@mui/icons-material';
import Conact from './Components/Conact';
import Admin from './Components/Admin';
import DataView from './Components/DataView';
import Feedback from './Components/Feedback';
import Bootm from './Components/Bootm';
import Dash from './Components/Dash';
import Cardby from './Components/Cardby';
import Pytdt from './Components/Pytdt';
import Spcoff from './Components/Spcoff';
import AddCart from './Components/AddCart';
import History from './Components/History';
import Premt from './Components/Premt';
import About from './Components/About';
import Help from './Components/Help';
import Card1 from './Components/Card1';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Login/> */}
    {/* <Sufg/> */}

      <Routes>
      <Route path='/' element={<><Navbar/><Home/></>}/>
  
<Route path='/Login' element={<><Navbar/><Login/></>}/>
    <Route path='/Signin' element={<><Navbar/><Signin/></>}/>
    <Route path='/Cards' element={<><Sufg/><Cards/><DataView/></>}/>
<Route path='/Conact' element={<><Conact/></>}/>
<Route path='/Feedback' element={<><Feedback/></>}/>
{/* <Route path='/Admin' element={<Admin/>}/> */}

<Route path='/Bootm' element={<><Bootm/></>}/>
<Route path='/Dash' element={<><Dash/></>}/>
<Route path='/Cardby' element={<><Cardby/></>}/>

<Route path='/Pytdt' element={<><Pytdt/></>}/>
<Route path='/Card1' element={<><Card1/></>}/>
<Route path='/Spcoff' element={<><Spcoff/></>}/>

<Route path='/AddCart' element={<><AddCart/></>}/>

<Route path='/Bootm' element={<><Bootm/></>}/>

<Route path='/History' element={<><History/></>}/>

<Route path='/Premt' element={<><Premt/></>}/>

<Route path='/Scus' element={<><Premt/></>}/>
<Route path='/About' element={<><About/></>}/>
<Route path='/Help' element={<><Help/></>}/>
</Routes>
    </div>
  );
}

export default App;
