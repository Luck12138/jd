import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/b4c5bbf7102eaf8e787be441a79ecf1e/jingdong',
  timeout: 10000
})

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, params, {
    }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data, {
    }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}
