import axios from 'axios';

var urlPrefix = 'http://localhost:3001/api'
var serverUrl = 'http://localhost:3001/'
var getProjects = () => {
  return axios.get(urlPrefix+'/projects')
}
var getTypes = () => {
  return axios.get(urlPrefix+'/types')
}

var getProjectById = (id) => {
  return axios.get(urlPrefix+'/projects/'+id)
}

var getTypeById = (id) => {
  return axios.get(urlPrefix+'/types/'+id)
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

export {serverUrl,getProjects, getProjectById ,addProjects, updateProjects, deleteProjects, getTypes, getTypeById}
