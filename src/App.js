import React, {Component} from 'react';
import { Router, Link, Redirect } from '@reach/router'
import RouteProjects from './RouteProjects'
import RouteAddProject from './RouteAddProject'
import RouteEditProject from './RouteEditProject'
import RouteSingleType from './RouteSingleType'
import { getTypes} from './API'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      types:[],
     
    }
  }

  componentDidMount(){
    getTypes().then(res => {
      this.setState({types:res.data});
    })
  }
  render(){
    var {types} = this.state;
    return (
      <div className="app">


          <div class="header">
            <i class="fas fa-bars"></i>
            <ul class="menu">
              <Link to="/projects">Home</Link>
              {types.map(type => <Link to={'types/'+type.id}>{type.name}</Link>)}
              <Link to="projects/create">Add a project</Link>
            </ul>
          </div>

          
          <Router>
          

            <RouteProjects path="projects" />
            <RouteSingleType path="types/:id" />
            <RouteEditProject path="projects/:id/edit" />
            <RouteAddProject path="projects/create" />

          </Router>

        
      </div>
    );
  }
}

export default App;
