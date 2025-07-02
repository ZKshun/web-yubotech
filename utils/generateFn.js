import { ref } from 'vue'

let cardLists = ref([])

// 工具函数：生成随机数
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// 生成随机长度的中文标题 (5-35个字符)
const generateTitle = () => {
  const words = [
    '如何', '教程', '指南', '分享', '记录', '体验', '制作', '学习', '健身', '美食',
    '旅行', '摄影', '技巧', '方法', '入门', '高级', '完整', '实用', '经验', '计划',
    '的', '一个', '我的', '你的', '这个', '那个', '简单', '快速', '高效', '专业',
    'vlog', '编程', '设计', '艺术', '生活', '日常', '工作', '学习', '运动', '健康'
  ]
  
  const minLength = 5
  const maxLength = 35
  const targetLength = getRandomInt(minLength, maxLength)
  let result = ''
  
  while (result.length < targetLength) {
    const randomWord = words[getRandomInt(0, words.length - 1)]
    // 确保添加后不会超过最大长度
    if (result.length + randomWord.length <= maxLength) {
      result += randomWord
    } else {
      // 如果添加后会超长，就结束循环
      break
    }
  }
  
  // 确保至少达到最小长度
  while (result.length < minLength) {
    result += words[getRandomInt(0, words.length - 1)]
  }
  
  return result
}

// 生成随机图片URL（不固定尺寸）
const generateImageUrl = () => {
  // 随机宽度在200-800之间
  const width = getRandomInt(200, 800)
  // 随机高度在150-600之间，保持大致4:3的比例范围
  const height = getRandomInt(150, 600)
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown']
  const texts = ['图片', '照片', '图像', '摄影', '作品', '示例', '展示', '内容']
  const text = texts[getRandomInt(0, texts.length - 1)]
  
  return `https://placehold.co/${width}x${height}/${colors[getRandomInt(0, colors.length - 1)]}/white?text=${text}&font=roboto`
}

// 生成随机用户名
const generateUsername = () => {
  const firstNames = ['张', '李', '王', '刘', '陈', '杨', '赵', '黄', '吴', '周']
  const lastNames = ['小明', '小红', '小刚', '小丽', '大伟', '小花', '大力', '小美', '建国', '建军']
  return `${firstNames[getRandomInt(0, firstNames.length - 1)]}${lastNames[getRandomInt(0, lastNames.length - 1)]}`
}

// 生成随机点赞数
const generateLikes = () => {
  const hasLikes = Math.random() > 0.2 // 80%概率有点赞数
  if (!hasLikes) return ''
  return `${getRandomInt(10, 9999)}`
}

// 生成卡片数据数组
export const generateCardList = (count = 20) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    imageUrl: generateImageUrl(),
    title: generateTitle(),
    username: generateUsername(),
    likes: generateLikes()
  }))
}

// 初始化卡片列表
cardLists.value = generateCardList(20)