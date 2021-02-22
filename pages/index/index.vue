<template>
    <view class="u-m-l-40 u-m-r-40 u-m-t-40">
        <u-grid :col="2">
            <u-grid-item @click="handleQst">
                <u-icon name="edit-pen-fill" :size="46"></u-icon>
                <view class="grid-text">快检抽样</view>
            </u-grid-item>
            <u-grid-item @click="handleAegis">
                <u-icon custom-prefix="custom-icon" name="weihu" :size="46"></u-icon>
                <view class="grid-text">数据维护</view>
            </u-grid-item>
            <u-grid-item>
                <u-icon name="hourglass" :size="46"></u-icon>
                <view class="grid-text">预留</view>
            </u-grid-item>
            <u-grid-item>
                <u-icon name="hourglass" :size="46"></u-icon>
                <view class="grid-text">预留</view>
            </u-grid-item>
            <u-grid-item>
                <u-icon name="backspace" :size="46"></u-icon>
                <view class="grid-text">退出登录</view>
            </u-grid-item>
        </u-grid>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Hello'
            }
        },
        onLoad() {
            
        },
        methods: {
            handleQst() {
                this.$u.toast("handleQst")
            },
            handleAegis() {
                this.$u.route('pages/aegis/aegis')
            }
        }
    }
</script>

<style>

</style>
