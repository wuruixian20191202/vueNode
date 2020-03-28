<template>
	<div class="follow">
		<Cell v-for='(item,index) of list' :key='item._id' :data='item' :index='index'  apiName="follow"/>
	</div>
</template>

<script>
	import Cell from '../components/cell.vue'
	import axios from '../plugins/axios.js'
	export default {
		name: 'follow',
		props: {
			msg: String
		},
		data() {
			return {
				list: []
			}
		},
		components: {
			Cell,
		},
		activated(){
			axios({
				url: '/api/goods/follow',
				params: {
					_page: 0,
					_limit: 6
				}
			}).then(
				res => this.list=res.data.data
			)
		}
	}
</script>

<style scoped>
	.follow {
		margin-top: 0.6rem;
		padding: 0 0.4rem;
	}
</style>
