import axios from 'axios';

var urlPrefix = 'http://localhost:3001/api'

var getProjects = () => {
  return axios.get(urlPrefix+'/projects')
}

var getProjectById = (id) => {
  return axios.get(urlPrefix+'/projects/'+id)
}

var addProjects = (data) => {
  return axios.post(urlPrefix+'/projects',data)
}

var updateProjects = (id,data) => {
  return axios.put(urlPrefix+'/projects/'+id,data)
    
}

var deleteProjects = (id) => {
  return axios.delete(urlPrefix+'/projects/'+id)
}

export {getProjects, getProjectById ,addProjects, updateProjects, deleteProjects}
