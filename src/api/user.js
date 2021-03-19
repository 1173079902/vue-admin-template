// import request from '@/utils/request'

export function login(data) {
  return Request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {

}

export function logout() {

}
