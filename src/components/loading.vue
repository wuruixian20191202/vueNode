<template>
	<div class="load">
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
	</div>
</template>

<script>
	export default {
		name: 'loading',
		props: {
			msg: String
		}
	}
</script>

<style scoped>
	.load {
		width: 2.8rem;
		height: 2.8rem;
		position: relative;
		margin: 0 auto;
		margin-top: 3.2rem;
	}

	.load span {
		display: inline-block;
		width: 0.4rem;
		height:0.4rem;
		border-radius: 50%;
		background: #fbc2eb;
		position: absolute;
		-webkit-animation: load 1.04s ease infinite;
	}

	@-webkit-keyframes load {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0.2;
		}
	}

	.load span:nth-child(1) {
		left: 0;
		top: 50%;
		margin-top: -0.2rem;
		-webkit-animation-delay: 0.13s;
	}

	.load span:nth-child(2) {
		left: 0.4rem;
		top: 0.4rem;
		-webkit-animation-delay: 0.26s;
	}

	.load span:nth-child(3) {
		left: 50%;
		top: 0;
		margin-left: -0.2rem;
		-webkit-animation-delay: 0.39s;
	}

	.load span:nth-child(4) {
		top: 0.4rem;
		right: 0.4rem;
		-webkit-animation-delay: 0.52s;
	}

	.load span:nth-child(5) {
		right: 0;
		top: 50%;
		margin-top: -0.2rem;
		-webkit-animation-delay: 0.65s;
	}

	.load span:nth-child(6) {
		right: 0.4rem;
		bottom: 0.4rem;
		-webkit-animation-delay: 0.78s;
	}

	.load span:nth-child(7) {
		bottom: 0;
		left: 50%;
		margin-left: -0.2rem;
		-webkit-animation-delay: 0.91s;
	}

	.load span:nth-child(8) {
		bottom: 0.4rem;
		left: 0.4rem;
		-webkit-animation-delay: 1.04s;
	}
</style>
