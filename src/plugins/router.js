import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

let routes = [
	{path:'/', redirect: '/home' },
	{path:'/home',component:(r) => { require(['../pages/home.vue'],r)} },
	{path:'/column',component:(r) => { require(['../pages/column.vue'],r)} },
	{path:'/detail/:_id',component:(r) => { require(['../pages/detail.vue'],r)} },
	{path:'/follow',component:(r) => { require(['../pages/follow.vue'],r)} },
	{path:'/login',component:(r) => { require(['../pages/login.vue'],r)} },
	{path:'/reg',component:(r) => { require(['../pages/reg.vue'],r)} },
	{path:'/user',component:(r) => { require(['../pages/user.vue'],r)} },
	{path:'*',component:(r) => { require(['../pages/Nopage.vue'],r)} },
];

let router = new VueRouter({
	routes,
	mode:'history'

})

export default router;
