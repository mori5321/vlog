import Api from '@/services/Api'

export default {
  signIn (credentials) {
    return Api().post('/users/sign_in', credentials)
  }
}