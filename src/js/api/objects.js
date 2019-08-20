import { http } from '@/utils/http'

export async function getObjects () {
  try {
    const response = await http({
      method: 'get',
      url: '/objects'
    })
    return response
  } catch (error) {
    return error.response
  }
}

export async function postObject (data) {
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
    return error.response
  }
}

export async function putObject (id, data) {
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
    return error.response
  }
}

export async function deleteObject (id) {
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
    return error.response
  }
}
