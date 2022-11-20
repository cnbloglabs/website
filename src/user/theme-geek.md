
<script setup>
import d from '/theme-screenshots/geek-desktop-dark.png'

const screenshots = {
  desktop: {light: '待上传...', dark: d},
  pad: "待上传...",
  phone:  "待上传...",
}
</script>

# geek

<Screenshot 
    :desktop="screenshots.desktop"
    :pad="screenshots.pad"
    :phone="screenshots.phone"
/>

<!-- {light: '待上传...', dark: '/theme-screenshots/geek-pad-dark.png'}
{light: '待上传...', dark: '/theme-screenshots/geek-phone-dark.png'} -->
## 介绍

- 👔 作者：[guangzan](https://www.cnblogs.com/guangzan/)
- 💻 兼容手机、平板、桌面
- 🌓 深色模式

## 配置支持

- 基础配置
- 表情输入
- GitHub
- 个性签名
- 图片灯箱
- 深色模式
- 背景
- 通知
- 音乐播放器
- 点击特效
- 博文签名
- 代码高亮
- 代码行号
- 博文目录
- 按钮工具
- 自定义链接
- Live2D 模型

## 使用


```js
const opts = {
  theme: {
    name: 'geek',
  },
}
```
