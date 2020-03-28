<template>
	<div class="reg">
		<div class="content">
			<yd-nav />
			<h1></h1>
			<div class="login-box">
				<p class="lsolid"></p>
				<div class="login">
					<router-link to="/login">登录</router-link>
					<span></span>
					<router-link to="/reg">注册</router-link>
				</div>
				<p class="rsolid"></p>
			</div>
			<ul>
				<yd-input :text="'账号'" :type="'text'"  v-model.lazy="username" />
				<yd-input :text="'昵称'" :type="'text'"  v-model.lazy="nikename" />
				<yd-input :text="'密码'" :type="'password'" v-model.lazy="password" />
				<input type="file" class="file"  />
			</ul>
			<div class="footbox">
				<Button :text="'注册'" @click='reg' />
				<!-- <a href="javascript:;" class="tishi">忘记密码？</a> -->
			</div>
			<div>{{errMess}}</div>
		</div>
	</div>
</template>

<script>
	import Button from '../components/Button.vue'
	import YdInput from '../components/yd-input.vue'
	import YdNav from '../components/yd-nav/yd-nav.vue'
	import axios from 'axios'
	export default {
		name: 'reg',
		props: {

		},
		data() {
			return {
				username: '',
				nikename: '',
				password: '',
				errMess: ''
			}
		},
		components: {
			Button,
			YdInput,
			YdNav
		},
		methods: {
			reg() {
				let file = document.querySelector(".file")
				let formData = new FormData();
				formData.append("icon", file.files[0]);
				formData.append("username", this.username)
				formData.append("password", this.password)
				formData.append("nikename", this.nikename)

				axios({
					url: '/api/reg',
					data: formData,
					method: 'POST',
				}).then(
					res => {
						if (res.data.err === 0) {
							this.$router.replace('/login')
						} else {
							this.errMess = res.data.msg
						}
					}
				)


			}

		}
	}
</script>

<style scoped>
	body {
		background: #f2f4f5;
	}

	.content {
		max-width: 6.4rem;
		margin: 0 auto;
	}


	.content h1 {
		width: 2.18rem;
		height: 1.35rem;
		background: url(../assets/img/my_cz.png) no-repeat 0.5rem 0;
		background-size: 50%;
		margin: 0 auto;
		margin-top: 1.22rem;
	}

	.content .login {
		width: 2.0rem;
		height: 0.38rem;
		margin: 0 auto;
		margin-top: 0.85rem;
	}

	.login a {
		width: 0.97rem;
		height: 0.38rem;
		font-size: 0.35rem;
		line-height: 0.38rem;
		float: left;
		color: #4c4f50;
		text-align: center;
	}

	.login span {
		float: left;
		height: 0.38rem;
		border-left: 1px solid #4c4f50;
	}

	.content .login-box {
		position: relative;
	}

	.content .login-box .lsolid {
		width: 1.96rem;
		height: 0.18rem;
		border-bottom: 1px solid #4c4f50;
		position: absolute;
		top: 0;
		left: 0.1rem;
	}

	.content .login-box .rsolid {
		width: 1.96rem;
		height: 0.18rem;
		border-bottom: 1px solid #4c4f50;
		position: absolute;
		top: 0;
		right: 0.1rem;
	}

	.content ul {
		width: 5.78rem;
		height: 3.84rem;
		border: 1px solid #e5e7e8;
		background: #fff;
		margin: 0 auto;
		margin-top: 0.68rem;
	}

	.content ul li {
		height: 0.95rem;
		position: relative;
	}

	.content ul li.lifirst {
		border-bottom: 1px solid #e5e7e8;
	}

	.content ul li input {
		padding-left: 1.24rem;
		width: 4.54rem;
		height: 100%;
		font-size: 0.4rem;
	}
	.content ul li span {
		width: 1.23rem;
		height: 0.49rem;
		position: absolute;
		top: 0.26rem;
		left: 0;
		border-right: 1px solid #676868;
		color: #676868;
		font-size: 0.25rem;
		line-height: 0.49rem;
		text-align: center;
	}

	.content .footbox {
		width: 4.65rem;
		height: 0.65rem;
		margin: 0 auto;
	}

	.content .login-btn {
		width: 4.65rem;
		height: 0.65rem;
		background: #4c4f50;
		color: #fff;
		text-align: center;
		line-height: 0.65rem;
		border-radius: 8px;
		display: block;
		margin-top: 0.62rem;
		font-size: 0.28rem;
	}

	.content .tishi {
		width: 1.4rem;
		font-size: 0.25rem;
		margin-top: 0.28rem;
		display: block;
	}
</style>
