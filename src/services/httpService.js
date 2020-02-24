import axios from 'axios'

class httpService {
  constructor() {
    this.http = axios.create({
      baseURL: ''
    })
  }

  async get(url, params, functionParams) {
    try {
      return this.http({
        method: 'get',
        url: url,
        params: params,
        ...functionParams
      })
    } catch {
      throw error
    }
  }

  async post(url, data, functionParams) {
    try {
      return this.http({
        method: 'post',
        url: url,
        data: data,
        ...functionParams
      })
    } catch {
      throw error
    }
  }

  async put(url, data, functionParams) {
    try {
      return this.http({
        method: 'put',
        url: url,
        data: data,
        ...functionParams
      })
    } catch {
      throw error
    }
  }

  async delete(url, params, functionParams) {
    try {
      return this.http({
        method: 'delete',
        url: url,
        params: params,
        ...functionParams
      })
    } catch {
      throw error
    }
  }
}

export default new httpService()
