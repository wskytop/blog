/* eslint-disable no-prototype-builtins */

import axios from "axios";

class ajax {
  constructor(option, interceptorsRequest, interceptorsResponse) {
    if (typeof option === "function") {
      if (typeof interceptorsRequest === "function") {
        interceptorsResponse = interceptorsRequest;
        interceptorsRequest = option;
      } else {
        interceptorsRequest = option;
        interceptorsResponse = (response) => {
          return response;
        };
      }
      option = {};
    }
    option = typeof option === "object" ? option : {};
    interceptorsRequest =
      typeof interceptorsRequest === "function"
        ? interceptorsRequest
        : (config) => {
            return config;
          };
    interceptorsResponse =
      typeof interceptorsResponse === "function"
        ? interceptorsResponse
        : (response) => {
            return response;
          };

    const params = {
      baseURL: "/",
      timeout: 50000,
      withCredentials: true,
      ...option,
    };
    this.request = null;
    this.init(params, interceptorsRequest, interceptorsResponse);
  }

  init(params, req, res) {
    this.request = axios.create(params);
    this.request.interceptors.request.use(
      async (config) => {
        config = req(config);
        // config = setForm(config)
        return config;
      },
      function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );
    this.request.interceptors.response.use(
      (response) => {
        response = res(response);
        return response;
      },
      function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
      }
    );
  }

  http(params) {
    return new Promise((resolve, reject) => {
      this.request
        .request(params)
        .then((res) => {
          if (res.code === 0) {
            resolve(res.data);
          } else {
            reject(res);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  post(url, data = {}, hideHint, config = {}) {
    return this.http({
      method: "post",
      url,
      data,
      hideHint,
      ...config,
    });
  }

  put(url, data = {}) {
    return this.http({ method: "put", url, data });
  }

  delete(url, data = {}) {
    return this.http({ method: "delete", url, data });
  }

  getNoHint(...args) {
    return this.get(...args, true);
  }

  postNoHint(...args) {
    return this.post(...args, true);
  }

  get(url, data = {}, hideHint, config) {
    const arry = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (Array.isArray(data[key])) {
          data[key].map((obj) => {
            arry.push(`${key}[]=${obj}`);
          });
        } else if (!data[key]) {
          delete data[key];
        } else {
          arry.push(`${key}=${data[key]}`);
        }
      }
    }
    return this.http({
      method: "get",
      url: `${url}?${arry.join("&")}`,
      data,
      hideHint,
      ...config,
    });
  }

  mock(data = {}, delay = 400) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, delay);
    });
  }
}

export default ajax;
