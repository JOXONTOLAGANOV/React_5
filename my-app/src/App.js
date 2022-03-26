import React  from "react";
import './App.css';
import About from "./components/About"
import Blog from "./components/Blog"
import Headr from "./components/Headr"
import Main from "./components/Main"
import Section from "./components/Section"
import Main1 from "./components/Main1"
import Section1 from "./components/Section1"
import Section_2 from "./components/Section_2"
import Footer from "./components/Footer"
import Footer1 from "./components/Footer1"
import Main3 from "./components/Main3"
import Main4 from "./components/Main4"
import Map1 from "./components/Map1"
import Map2 from "./components/Map2"
import {BrowserRouter, Route, Switch} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Headr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route  path='/blog' component={Blog} />
            <Route path='/about' component={About} />
            <Route path='/map1' component={Map1} />
          </Switch>

          <Switch>
          <Route path='/blog' component={Main3} />
          <Route path='/about' component={Main4} />
          </Switch>

          <Switch>
            <Route path='/map1' component={Map2} />
          </Switch>

          <Footer/>
          <Footer1/>

      </div>  
    </BrowserRouter>
  )
}



const Home = () => {
  return(
    <div className="App">
        <BrowserRouter>
            <Route path='/' component={Main} />
            <Route path='/' component={Section} />
            <Route path='/' component={Main1} />
            <Route path='/' component={Section1} />
            <Route path='/' component={Section_2} />
        </BrowserRouter>
    </div>
  )
}




export default App;
