

import {BrowserRouter,Route,Routes} from "react-router-dom"
import Admin from "./components/Admin";
import Home from './components/Home';

// Import the functions you need from the SDKs you need



// Firebase configuration




function App() {













  

  return (
   

  <BrowserRouter>
<Routes>
<Route  path="/" element={<Home/>} />
<Route  path="/admin" element={<Admin/>} />

</Routes>
</BrowserRouter> 

  );
}

export default App;
