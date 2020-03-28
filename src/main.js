import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false

import './assets/css/base.css'
import './assets/js/font.js'
// 路由的配置
import router from './plugins/router.js'

// 引入服务端的配置模块
import server from './config/server.js'
Vue.prototype.$baseUrl=server.baseServerUrl;

import './plugins/axios'

let vm=new Vue({
	data:{
		hNav:false,
		fNav:false,
		bLoad:false
	},
	
	render: h => h(App),
	router,
}).$mount('#app')
export default vm;