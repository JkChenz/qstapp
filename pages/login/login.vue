<template>
	<view>
		<view class="bgColor"></view>
		<view class="logo-wrap" style="margin-top: 230rpx;">
			<image class="image" src="../../static/img/simate-icon.jpg"></image>
		</view>
		<view class="u-p-50">
			<u-field v-model="username" label="用户名" placeholder="请输入用户名"></u-field>
			<u-field v-model="password" label="密码" placeholder="请输入密码"></u-field>
			<!-- <u-field v-model="code" label="验证码" placeholder="请输入验证码">
				<u-image slot="right" width=150rpx height=60rpx :src="img" @click="refreshCaptcha()"></u-image>
			</u-field> -->
			<u-button class="u-m-t-80" shape="circle" @click="handleLogin()">登录</u-button>
		</view>
	</view>
</template>

<script>
	import {getCaptcha,loginByUsername} from '../../api/login.js'
	export default {
		data() {
			return {
				username: "",
				password: "",
				code: "",
				img: "",
				key: ""
				
			}
		},
		methods: {
			handleLogin() {
				loginByUsername(this.username, this.password, this.key, this.code).then((res)=>{
					console.log(res)
				})
			},
			refreshCaptcha() {
				getCaptcha().then((res)=>{
					this.img = res.data.image
					this.key = res.data.key
				})
			}
		},
		onLoad() {
			this.refreshCaptcha()
		}
	}
</script>

<style lang="scss" scoped>
	.bgColor {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #FFFFFF;
		z-index: -1;
	}

	.logo-wrap {
		width: 100%;
		text-align: center;
	}

	.image {
		width: 220rpx;
		height: 220rpx
	}
</style>
