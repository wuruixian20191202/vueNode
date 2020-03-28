<template>
	<div class="Button">
		<input type="button" @click="$emit('click')" :value="text" :style="{background:bgcolor}" class="login-btn" />
	</div>
</template>

<script>
	export default {
		name: 'Button',
		props: {
			msg: String,
			text: {
				type: String,
				default: '按钮'
			},
			bgcolor: {
				type: String,
				default: '#4c4f50'
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.content .login-btn {
		width: 4.65rem;
		height: 0.65rem;
		color: #fff;
		text-align: center;
		line-height: 0.65rem;
		border-radius: 8px;
		display: block;
		margin-top: 0.62rem;
		font-size: 0.28rem;
	}
</style>
