import React, {Component} from 'react';
import { Router, Link } from '@reach/router'
import { getTypeById} from './API'
import Project from './Project'

class RouteSingleType extends Component {

  constructor(props){
    super(props)

    this.state = {
      type:null,
     
    }
  }

  componentDidMount(){
    var {id} = this.props;
    getTypeById(id).then(res => {
      this.setState({type:res.data});
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.id != this.props.id ){
      getTypeById(nextProps.id).then(res => {
        this.setState({type:res.data});
      })
    }
    return true
  }

  render(){
    var {type} = this.state;
    return type ? (
      <div class="main">
        <h3>{type.name}</h3>
        {
          type.projects.map((project) => {

            var projectProps = {
              ...project,
              key: project.id,
            };
            return (<Project {...projectProps} />)
          })
        }
      </div>
    ) : null
  }
}

export default RouteSingleType;
