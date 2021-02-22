<template>
	<view class="u-m-l-40 u-m-r-40 u-m-t-40">
		<u-grid :col="2">
			<u-grid-item @click="handleQst">
				<u-icon name="edit-pen-fill" :size="46"></u-icon>
				<view class="grid-text">检测单位维护</view>
			</u-grid-item>
			<u-grid-item @click="handleQst">
				<u-icon name="edit-pen-fill" :size="46"></u-icon>
				<view class="grid-text">市场维护</view>
			</u-grid-item>
			<u-grid-item @click="handleQst">
				<u-icon name="edit-pen-fill" :size="46"></u-icon>
				<view class="grid-text">商品维护</view>
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
			navigateBack() {
				this.$u.route({
					type:"navigateBack"
				})
			},
		}
	}
</script>

<style>
</style>
