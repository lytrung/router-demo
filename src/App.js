import React, {Component} from 'react';
import { Router, Link } from '@reach/router'
import RouteProjects from './RouteProjects'
import RouteAddProject from './RouteAddProject'
import RouteEditProject from './RouteEditProject'
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="app">


          <div class="header">
            <i class="fas fa-bars"></i>
            <ul class="menu">
              {/*<li><a class="color1" href="">Projects</a></li>
              <li><a class="color2" href="">Add a project</a></li>
              <li><a class="color4" href="">Login</a></li>
              <li><a class="color5" href="">Signup</a></li>*/}
              <Link to="/">Home</Link>
              <Link to="projects/create">Add a project</Link>
            </ul>
          </div>

          
          <Router>
            <RouteProjects path="/" />
            <RouteEditProject path="projects/:id/edit" />
            <RouteAddProject path="projects/create" />
            

          </Router>

        
      </div>
    );
  }
}

export default App;
