<template>
    <u-tabs-swiper ref="tabs" :list="list" :current="currentTab" :is-scroll="false" @change="tabsChange"></u-tabs-swiper>
</template>

<script>
    import {
        pageSamplingTask
    } from '@/api/samplingTask'
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
                    currentTab:0,
                    query:{}
    			}
    		},
            methods:{
                tabsChange(index){
                    this.currentTab = index
                    if(index == 0)
                    {
                        this.query={
                            staffId: uni.getStorageSync("userInfo").user_id,
                        }
                    }
                    pageSamplingTask(null,null,this.query).then((res)=>{
                        console.log(res)
                    })
                },
            }
    	}
</script>

<style>
</style>
