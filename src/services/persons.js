import axios from 'axios'
const baseUrl = 'https://polar-thicket-98193.herokuapp.com/api/persons'

const getAll = () => {
    return axios.get(baseUrl)
  }
  
  const create = newObject => {
    return axios.post(baseUrl, newObject)
  }
  
  const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
  }

  const deletePerson = (id) => {
    console.log(id);
    return axios.delete(`${baseUrl}/${id}`)
  }

  const exportObj = { getAll, create, update, deletePerson }
  
  export default exportObj
