import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  // baseURL: 'https://1jzxrj179.lp.gql.zone/graphql', // api的base_url
  // baseURL: 'http://10.0.0.123:8080/rest/graph', // api的base_url
  baseURL: '/rest/graph', // api的base_url
  timeout: 15000                  // 请求超时时间
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * res.error 数组长度不为0为出错，错误原因error[0].message
     */
    const res = response.data
    if ((res.errors) && (res.errors).length > 0) {
      Message({
        // message: res.errors[0].message,
        message: '查询失败',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
