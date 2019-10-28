import { http } from '@/services/http'

export class Object {
  static getAll () { return getAllObjects() }
  static post (data) { return postObject(data) }
  static put (id, data) { return putObject(id, data) }
  static delete (id) { return deleteObject(id) }
}

async function getAllObjects () {
  try {
    const response = await http({
      method: 'get',
      url: '/objects'
    })
    return response
  } catch (error) {
    throw error.response
  }
}

async function postObject (data) {
  try {
    const response = await http({
      method: 'post',
      url: '/object/add',
      data: {
        data
      }
    })
    return response
  } catch (error) {
    throw error.response
  }
}

async function putObject (id, data) {
  try {
    const response = await http({
      method: 'put',
      url: '/object/update',
      data: {
        id,
        data
      }
    })
    return response
  } catch (error) {
    throw error.response
  }
}

async function deleteObject (id) {
  try {
    const response = await http({
      method: 'detele',
      url: '/object/delete',
      params: {
        id
      }
    })
    return response
  } catch (error) {
    throw error.response
  }
}
