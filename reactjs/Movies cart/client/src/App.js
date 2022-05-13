import React, {Fragment} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Create from "./components/screens/Create";
import Read from "./components/screens/Read"
import Home from "./components/screens/Home"

function App() {
  return (
   <Fragment>
     <BrowserRouter>
      <Header></Header>
        
        <Routes>
          
            <Route path = '/' element={<Home></Home>}></Route>
            <Route path = '/create' element={<Create></Create>}></Route>
            <Route path = '/read' element={<Read></Read>}></Route>
        
        </Routes>

    </BrowserRouter>
  </Fragment>
  );
}

export default App;
