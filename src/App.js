import React from "react";
import {
  BrowserRouter as Roter,
  Route,
  Routes
} from 'react-router-dom';
import Menu from "./components/Menu/Menu";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/About";
import ContactPage from "./pages/ContactPage/Contact";
import JokesPage from "./pages/JokesPage/Jokes";
import RegisterPage from "./pages/RegisterPage/Register";


// React router dom y ogtagorcvum e ejery xekavarelu hamar ayn chka Reacti projektum usti petq e instal anel 
// instal anelu hamar grum enq npm i react-router-dom 
// amboxc ejery havaqvum en BrowserRouteri mej ayn inport e arvum react-router-dom i gradaranic 
// as nsanakum e poxarini 
// Routes y hetevum e ejeri chist asxatelun aysinqn Route nerin
// Routes y naxkin versiaum kocvum er switch 
// amen eji hamar bacum enq mihat Route vory uni path hatkutyun ev element hatkutyun 
// path y stanum e mer path y te ayt path i jamanak vor ej texapoxvi isk eji componenty grvum e elementi mej
// exact hatkutyuny nsanakum e miayn 


export default function App() {
  return (
    <Roter>
      <Menu />
      <Routes>
        <Route path='/Home' element={<HomePage/>} />
        <Route exact path='/AboutPage' element={<AboutPage/>} />
        <Route exact path='/ToDo' element={<ContactPage/>} />
        <Route exact path='/Jokes' element={<JokesPage/>} />
        <Route exact path='/Register' element={<RegisterPage/>} />
      </Routes>
    </Roter>
  )
}