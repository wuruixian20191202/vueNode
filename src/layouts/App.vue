<template>
	<div id="app">
		<Header v-if='$root.hNav'/>

		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<!-- <Follow/> -->
		<!-- <Column/> -->
		<!-- <Follow /> -->
		<!-- <User/> -->
		<!-- <Login/> -->
		<!-- <Reg/> -->
		<!-- <Detail/> -->
		<Load v-if='$root.bLoad' />
		<Footer v-if='$root.fNav' />
	</div>
</template>

<script>
	import Header from './Header.vue';
	// import Home from '../pages/home.vue';
	import Footer from './Footer.vue'
	// import Follow from '../pages/follow.vue'
	// import Column from '../pages/column.vue'
	// import User from '../pages/user.vue'
	// import Login from '../pages/login.vue'
	// import Reg from '../pages/reg.vue'
	// import Detail from '../pages/detail.vue'
	import Load from '../components/loading.vue'
	export default {
		name: 'App',
		components: {
			Header,
			// Home,
			Footer,
			// Follow,
			// Column,
			// User,
			// Login,
			// Reg,
			// Detail,
			Load
		},
		watch: {
			$route: {
				handler(nextValue) {   ////,两个参数一个没用 PrevValue
					let path = nextValue.path
					if(/home|follow|column/.test(path)){
						this.$root.hNav=true
						this.$root.fNav=true
					}
					if(/detail|reg|login/.test(path)){
						this.$root.hNav=this.$root.fNav=false
						
					}
					if(/user/.test(path)){
						this.$root.hNav=false
						this.$root.fNav=true
					}
				},
				immediate: true
			}
		}
	}
</script>

<style>

</style>
