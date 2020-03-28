<template>
	<div class="yd-nav">
		<p class="fhbtn" :style="{background:bgcolor,border:borderW+'px'}"><a @click="goback" :class="arrow"></a></p>
	</div>
</template>

<script>
	export default {
		name: 'yd-nav',
		props: {
			bgcolor:{
				type:String,
				default:'#fff'
			},
			borderW:{
				type:Number,
				default:1
			},
			arrow:{
				type:String,
				default:'default'
			}
		},
		methods:{
			goback(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.fhbtn {
		padding-top: 0.27rem;
	}

	.fhbtn a {
		display: block;
		width: 0.23rem;
		height: 0.25rem;
		margin-left: 0.3rem;
	}
	.fhbtn a.default{
		background: url(/img/history1.png) no-repeat 0 0;
		background-size: 100%;
	}
	.fhbtn a.blue{
		background: url(/img/history.png) no-repeat 0 0;
		background-size: 100%;
	}
</style>
