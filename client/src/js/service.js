import axios from 'axios'

let headers = {
  "X-Requested-With": "XMLHttpRequest"
}

export default () => {
  return axios.create({
    headers: headers,
  })
}
