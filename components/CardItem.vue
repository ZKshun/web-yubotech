<template>
  <view class="card">
    <view class="image-container">
      <image class="card-image" :src="imageUrl" mode="widthFix" />
    </view>
	
    <view class="content-container">
      <text class="card-title">{{ title }}</text>
    </view>
    
    <view class="footer-container">
      <text class="username">{{ username }}</text>
      <text class="likes-count" v-if="likes">♡ {{ likes }}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    imageUrl: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    likes: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 170px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
  
  .image-container {
	border-radius: 5px;
    width: 48vw;
    
    .card-image {
      width: 48vw;
      height: auto;
      min-height: 150px;
      display: block;
      background-color: #f5f5f5;
    }
  }

  .content-container {
    padding: 12px;
    flex: 1;
    
    .card-title {
      font-size: 12px;
      line-height: 1.4;
      color: #333;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 500;
    }
  }

  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
	flex-direction: row;
	flex-wrap: nowrap;
    padding: 0 12px 12px;
    gap: 8px; /* 添加间距 */
    
    .username {
      font-size: 12px;
      color: #999;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1; /* 占据剩余空间 */
    }
    
    .likes-count {
      font-size: 10px;
      color: #666;
      white-space: nowrap; /* 防止数字换行 */
      padding-right: 10px;
    }
  }
}
</style>