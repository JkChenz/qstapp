<template>
    <u-tabs-swiper ref="tabs" :list="list" :current="currentTab" :is-scroll="false" @change="tabsChange"></u-tabs-swiper>
</template>

<script>
    export default {
    		data() {
    			return {
    				list: [{
    					name: '指派任务'
    				}, {
    					name: '公共任务'
    				}, {
    					name: '已完成任务',
    				}],
                    currentTab:0
    			}
    		},
            methods:{
                tabsChange(index){
                    this.currentTab = index
                },
            }
    	}
</script>

<style>
</style>
