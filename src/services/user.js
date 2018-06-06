import request from '@/utils/request/axios';
// 方法
import { setMd5 } from '@/utils/fns';
// 常量
import { API_DOMAIN } from '@/utils/consts';

export async function query() {
  return request('/api/users');
}
// 获取当前用户信息
export async function queryCurrent() {
  return request(`${API_DOMAIN}/api/server/currentUser`);
}
// 修改登录密码
export async function editPassword(params) {
  const oldpwd = setMd5(params.oldpwd);
  const newpwd = setMd5(params.newpwd);

  return request(`${API_DOMAIN}/api/server/updatepwd`, {
    method: 'POST',
    body: { oldpwd, newpwd },
  });
}
// 修改用户信息
export async function editUser(params) {
  return request(`${API_DOMAIN}/api/server/updateuser`, {
    method: 'POST',
    body: { ...params },
  });
}
// 上传头像
export async function uploadProtrait(params) {
  console.log(params, 'params');
  return request(`${API_DOMAIN}/api/server/upload/portrait`, {
    method: 'POST',
    responseType: 'text',
    body: params,
  });
}
