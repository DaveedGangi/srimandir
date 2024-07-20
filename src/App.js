import {Component} from "react"

import {Route, Switch} from "react-router-dom"


import Home from "./components/home"

import PoojaBook from "./components/poojabook"

import PoojaSeva from "./components/poojaseva"

import PoojaSevaNext from "./components/poojasevanext"

import Login from "./components/authenticate"

class App extends Component{
  render(){
        return(
            <div>
              <Switch>
               <Route exact path="/login" component={Home} />
               <Route exact path="/puja" component={PoojaBook} />
               <Route exact path="/poojaseva" component={PoojaSeva} />
               <Route exact path="/participate" component={PoojaSevaNext} />
               <Route exact path="/" component={Login} />
              </Switch>
            </div>
        )
    }
}


export default App;