import axios from 'axios';

axios.interceptors.request.use((config) => {
    
    if (config.url.indexOf("admin") >= 0) {
        let loginResult = JSON.parse(localStorage.getItem("adminLoginResult"));	// 解析从localStorage里拿出的loginResult
        if (loginResult) { 
            const token = loginResult.token		// 取出adminToken
            config.headers.Authorization = `Bearer ${token}`;	// 将adminToken放入到请求头里
        }
    } else {
    let loginResult = JSON.parse(localStorage.getItem("loginResult"));	// 解析从localStorage里拿出的loginResult
    if (loginResult) { 
        const token = loginResult.token		// 取出accessToken
        config.headers.Authorization = `Bearer ${token}`;	// 将accessToken放入到请求头里
    }
  }
  return config;
}, (error) => {
	return Promise.reject(error);
});

axios.interceptors.response.use(
	response => {
		if (response.status === 200) {
			return Promise.resolve(response.data);
		} else {
			return Promise.reject(response.data);
		}
	},
	(error) => {
		console.log('error', error);
	}
);

export default axios;