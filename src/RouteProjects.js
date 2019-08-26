import React, {Component} from 'react';
import { Router, Link } from '@reach/router'
import { getProjects} from './API'
import Project from './Project'

class RouteProjects extends Component {

  constructor(props){
    super(props)

    this.state = {
      projects:[
        {
          id:1,
          name:'Build a hut',
          description: 'Nice project'
        },{
          id:2,
          name:'Make a basket',
          description: 'Pretty project'
        }
      ],
     
    }
  }

  

  componentDidMount(){
    getProjects().then(res => {
      this.setState({projects:res.data});
    })
  }

  render(){
    var {projects} = this.state;
    return (
      <div class="main">
        <h3>Projects</h3>

        {
          projects.map((project) => {

            var projectProps = {
              ...project,
              key: project.id,
              deleteProjects: this.deleteProjects,
              setProjectToUpdate: this.setProjectToUpdate
            };
            return (<Project {...projectProps} />)
          })
        }

      </div>
    );
  }
}

export default RouteProjects;
