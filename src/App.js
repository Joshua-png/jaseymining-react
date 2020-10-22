import React from 'react';
import './App.css';
import './style.css';
import './owl.carousel.min.css'
import 'bootstrap/dist/css/bootstrap.css';
// import NavBar from './components/Header/NavBar';
import Carousels from './components/Carousel/Carousel';
// import Navbars  from './components/Header/Navbar';
import Body from './components/Body/Body';
import Layout from './components/layout/layout';


function App() {
  return (
    // <NavBar />
    <React.Fragment>
       {/* <Navbars /> */}
       <Layout />
      <Carousels />
      <Body />
      
       
       
    </React.Fragment>
    
  );
}

export default App;
