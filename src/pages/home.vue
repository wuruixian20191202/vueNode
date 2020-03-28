<template>
	<div class="home">
		<Swiper :data="list"  apiName="banner" />
		<div class="home-cell-pad">
			<Cell v-for='(item,index) of home' :key='item._id' :data='item' :index='index'  apiName="home"/>
		</div>
	</div>
</template>

<script>
	import Swiper from '../components/swiper.vue'
	import Cell from '../components/cell.vue'
	import axios from '../plugins/axios.js'
	export default {
		name: 'home',
		props: {

		},
		data() {
			return {
				list: [],
				home:[]
			}
		},
		components: {
			Swiper,
			Cell
		},
		activated() {
			axios({
				url: '/api/goods/banner',
				params: {
					_page: 0,
					_limit: 2
				},
			}).then(
				res => this.list=res.data.data
			)
			// cell组件
			axios({
				url: '/api/goods/home',
				params: {
					_page: 0,
					_limit: 8
				},
			}).then(
				res => this.home=res.data.data
			)
		}
	}
</script>

<style scoped>
	.home-cell-pad {
		padding: 0 0.4rem;
	}

	.home {
		margin-top: 0.6rem
	}
</style>
