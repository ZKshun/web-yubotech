<template>
  <view class="container">
    <!-- 固定在顶部的三个区域 -->
    <view class="fixed-header">
      <!-- 顶部导航栏 -->
      <view class="top-tabs">
        <view class="tab active">关注</view>
        <view class="tab">发现</view>
        <view class="tab">深圳</view>
      </view>
      
      <!-- 搜索框 -->
      <view class="search-bar">
        <input class="search-input" placeholder='大家都在搜"妆容画廊"' />
      </view>
      
      <!-- 横向滚动分类 -->
      <scroll-view class="category-scroll" scroll-x>
        <view
		  class="category-item"
	      v-for="(item,index) in categoryList" 
		  :key="index"
		  :class="item=='Vlog'?'active':''"
		>{{item}}</view>
      </scroll-view>
    </view>
    
    <!-- 主体内容区域（内部滚动） -->
    <view class="content">
      <!-- 两栏布局 -->
      <view class="card-container">
        <!-- 第一列 -->
        <view class="card-column">
		  <card-item
		    v-for="item in cardList1"
			:key="item.imageUrl"
			:imageUrl="item.imageUrl"
			:title="item.title"
			:username="item.username"
			:likes="item.likes"
		  />
        </view>
        
        <!-- 第二列 -->
        <view class="card-column">
          <card-item
            v-for="item in cardList2"
			:key="item.imageUrl"
			:imageUrl="item.imageUrl"
			:title="item.title"
			:username="item.username"
			:likes="item.likes"
          />
        </view>
      </view>
    </view>
    
    <!-- 底部导航栏 -->
    <view class="bottom-tabbar">
      <view class="tabbar-item active">
        <text class="text">首页</text>
      </view>
      <view class="tabbar-item">
        <text class="text">商城</text>
      </view>
      <view class="tabbar-item center">
        <text class="icon">＋</text>
      </view>
      <view class="tabbar-item">
        <text class="text">消息</text>
      </view>
      <view class="tabbar-item">
        <text class="text">我</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import {ref} from 'vue'
import CardItem from '@/components/CardItem.vue'
import { generateCardList } from '../../utils/generateFn';

// 横向滚动区域
const categoryList = ref(['美','游戏','穿搭','Vlog','科技数码','运动健身','饮食健康','高级编程'])

// 获取主体内容
const cardList = generateCardList(50);
const cardList1 = computed(()=>cardList.filter((item,index)=>index%2==0))
const cardList2 = computed(()=>cardList.filter((item,index)=>index%2==1))
</script>

<style lang="scss" scoped>
/* 全局重置 */
page, view, scroll-view {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* 容器样式 */
.container {
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100vh;
  position: relative;
  overflow: hidden; 
}

/* 固定在顶部的区域 */
.fixed-header {
  position: fixed;
  top: 1;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: white;
  padding-bottom: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

/* 顶部导航栏 */
.top-tabs {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 23px;
  width: 70%;
  margin: 0 auto;
  
  .tab {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
    padding: 1px 0;
    white-space: nowrap;
    
    &.active {
      color: #000;
      font-weight: bold;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 2px;
        background-color: #ff2442;
      }
    }
  }
}

/* 搜索框 */
.search-bar {
  padding: 0px 15px;
  margin-top: 5px;
  
  .search-input {
    width: 100%;
    height: 24px;
    background-color: #f5f5f5;
    border-radius: 16px;
    text-align: center;
    font-size: 10px;
    color: #333;
  }
}

/* 横向滚动分类 */
.category-scroll {
  width: 150vw;
  height: 25px;
  white-space: nowrap;
  display: flex;
  justify-content: space-around;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  padding: 5px 10px 0;
  
  .category-item {
    display: inline-block;
    margin: 0 5px;
    padding: 5px 12px;
    border-radius: 15px;
    font-size: 10px;
    color: #666;
    
    &.active {
      color: #000;
      background-color: #f5f5f5
    }
  }
}

/* 内容区域（内部滚动） */
.content {
  position: fixed;
  height: 78vh;
  top: 120px;
  left: 0;
  right: 0;
  overflow-y: auto; /* 允许垂直滚动 */
  padding: 15px;

  /* 卡片布局 */
  .card-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
	padding: 0 3px;
    
    .card-column {
      width: 48%;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
}

/* 底部导航栏 */
.bottom-tabbar {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #eee;
  z-index: 100;
  background-color: white;
  
  .tabbar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #666;
    flex: 1;
    height: 100%;
    
    &.active {
      color: #ff2442;
    }
    
    &.center {
      flex: 0 0 40px;
      position: relative;
      
      .icon {
        position: absolute;
        top: 2px;
        width: 35px;
        height: 25px;
        background-color: #ff2442;
        border-radius: 15%;
        text-align: center;
        color: white;
        font-size: 20px;
      }
    }
    
    .text {
      font-size: 10px;
    }
  }
}
</style>