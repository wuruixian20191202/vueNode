<template>
	<div class="column">
		<Cell v-for='item of list' :key='item._id' :data='item' apiName="column" />
	</div>
</template>

<script>
	import Cell from '../components/cell.vue'
	import axios from '../plugins/axios.js'
	export default {
		name: 'column',
		props: {
			msg: String
		},
		data() {
			return {
				list: []
			}
		},
		components: {
			Cell
		},
		
		activated() {
			axios({
				url: '/api/goods/column',
				params: {
					_page: 0,
					_limit: 6
				},
			}).then(
				res => this.list = res.data.data
			)
		}
	}
</script>

<style scoped>
	.column {
		margin-top: 0.6rem;
		padding: 0 0.4rem;
	}
</style>
