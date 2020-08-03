

import { BASE_API } from './../config'
import request from './request'

function httpHomeInfo(data) {
  let params = {
    ...data
  }
  return request.post(`${BASE_API}/zzcx/home/home/home-list`, params)
}

function httpHomeGet(data) {
	let params = {
		...data
	}
	return request.get(`${BASE_API}/zzcx/home/home/home-list`, {
		params: {
			...params
		}
	})
}

export default {
  httpHomeInfo
}
