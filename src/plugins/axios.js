import Vue from 'vue'
import axios from 'axios'
import router from './router.js'
import vm from '../main.js'
// Add a request interceptor
axios.interceptors.request.use(function(config) {
	// Do something before request is sent
	let token = window.localStorage.getItem('user')
	token = token ? JSON.parse(window.localStorage.getItem('user')).token : ''
	config.headers={
		token: token
	}
	
	//控制loading显示
	vm.bLoad=true
	
	return config;
}, function(error) {
	// Do something with request error
	return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function(response) {
	// Any status code that lie within the range of 2xx cause this function to trigger
	// 校验返回数据，token过期 ，路由跳转login传递当前路由的地址
	let currentRoute = router.currentRoute.fullPath;
	if(response.data.err==2 && !currentRoute.includes('/login')){
		router.push({
			path:'/login',
			query:{p:currentRoute}
		})
	}
	vm.bLoad=false
	return response;
}, function(error) {
	// Any status codes that falls outside the range of 2xx cause this function to trigger
	// Do something with response error
	return Promise.reject(error);
});


Vue.prototype.$axios = axios;
window.axios = axios;
export default axios;
