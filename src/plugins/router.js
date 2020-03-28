import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// import Home from '../pages/home.vue'
// import Column from '../pages/column.vue'
// import Detail from '../pages/detail.vue'
// import Follow from '../pages/follow.vue'
// import Login from '../pages/login.vue'
// import Reg from '../pages/reg.vue'
// import User from '../pages/user.vue'
// import Nopage from '../pages/Nopage.vue'


let routes = [
	// {path:'/home',component:Home},
	{path:'/home',component:(r) => { require(['../pages/home.vue'],r)} },
	{path:'/column',component:(r) => { require(['../pages/column.vue'],r)} },
	{path:'/detail/:_id',component:(r) => { require(['../pages/detail.vue'],r)} },
	{path:'/follow',component:(r) => { require(['../pages/follow.vue'],r)} },
	{path:'/login',component:(r) => { require(['../pages/login.vue'],r)} },
	{path:'/reg',component:(r) => { require(['../pages/reg.vue'],r)} },
	{path:'/user',component:(r) => { require(['../pages/user.vue'],r)} },
	{path:'/',component:(r) => { require(['../pages/home.vue'],r)} },
	{path:'*',component:(r) => { require(['../pages/Nopage.vue'],r)} },
];

let router = new VueRouter({
	routes,
	mode:'history'

})

export default router;
