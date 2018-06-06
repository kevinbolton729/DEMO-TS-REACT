import Fly from 'flyio/dist/npm/fly';
// 配置
import { API_DATA_ERROR, API_DATA_SUCCESS, API_DATA_TIMEOUT } from '@/utils/consts';

// 获取 Fly实例
const fly = new Fly();
// 响应错误处理函数
const errorHandler = {
  status: 0,
  message: API_DATA_ERROR,
  data: [],
};
// 响应成功处理函数
const successHandler = {
  status: 1,
  message: API_DATA_SUCCESS,
  data: [],
};

// 发起多请求
export const requestAll = (fetchs) => {
  if (fetchs.length < 2) {
    console.log('请传入2个及以上的请求函数');
    return null;
  }
  return fly
    .all([...fetchs])
    .then(
      fly.spread((...response) => {
        successHandler.data = response.reduce((arr, current) => {
          arr.push(current.extData.data);
          return arr;
        }, []);
        console.log(successHandler, 'successHandler');

        return successHandler;
      })
    )
    .catch((error) => {
      console.log(error);
      return errorHandler;
    });
};

// 封装 fly
const fetch = (url, options) => {
  console.log(options.params, 'fly request params');
  let withCredentials = true;
  if (options && options.credentials !== undefined) {
    withCredentials = options.credentials;
  }

  return new Promise((resolve, reject) => {
    fly
      .request(url, options.params || null, {
        method: options.method || 'GET',
        headers: options.headers || {},
        // 是否自动将Content-Type为“application/json”的响应数据转化为JSON对象，默认为true
        parseJson: true,
        // 设置responseType
        // eg.arraybuffer/blob/document/json/text/moz-chunked-arraybuffer/ms-stream
        responseType: options.responseType || 'json',
        timeout: options.timeout || API_DATA_TIMEOUT, // 超时时间
        withCredentials,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
// 封装 请求函数request
const request = (url, options) => {
  const newOptions = { ...options };

  newOptions.headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    ...newOptions.headers,
  };

  if (
    !(newOptions.method === 'POST' || newOptions.method === 'PUT') &&
    url.indexOf('/upload/') !== -1
  ) {
    newOptions.headers['X-Requested-With'] = 'XMLHttpRequest';
  }

  return fetch(url, newOptions)
    .then(response => response.data)
    .catch(() => {
      console.log(`请求URL: ${url}`);
      return errorHandler;
    });
};

export default request;
