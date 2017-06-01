/**
 * Created by yanfeng-mac on 2017/6/1.
 */
const API_URL = '/api/auth';

export default {
  login(context,username,password) {
    return context.$http({
      url: API_URL + '/login',
      method: 'post',
      data: {
        'username': username,
        'password': password
      }
    })
  }
}
