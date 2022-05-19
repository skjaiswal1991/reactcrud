import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './component/Home';
import Addemployee from './component/employeeAdd';
import Listemployee from './component/employeeList';
import Editemployee from './component/employeeEdit';

function App() {   

  return (
      <div className="container">
          <Router>
              <div className="col-md-12">
                  <h1 className="text-center" style={style}></h1>
                  <Switch>
                      <Route path="/" exact component={Listemployee} />
                      <Route path="/add" exact component={Addemployee} />
                      <Route path="/edit/:id" exact component={Editemployee} />
                 
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
