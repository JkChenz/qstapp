<template>
    <view>
        <view class="bgColor"></view>
        <view class="logo-wrap" style="margin-top: 230rpx;">
            <image class="image" src="../../static/img/simate-icon.jpg"></image>
        </view>
        <view class="u-p-50">
            <u-field v-model="username" label="用户名" placeholder="请输入用户名"></u-field>
            <u-field v-model="password" label="密码" placeholder="请输入密码"></u-field>
            <u-button class="u-m-t-80" shape="circle" @click="handleLogin()">登录</u-button>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                username:"",
                password:""
            }
        },
        methods:{
            handleLogin(){
                console.log(username,password);
            },
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
