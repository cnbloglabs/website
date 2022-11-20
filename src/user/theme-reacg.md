<script setup>
import desktopLight from './theme-screenshots/reacg-desktop-light.png'
import padDark from './theme-screenshots/reacg-pad-dark.png'
import phoneDark from './theme-screenshots/reacg-phone-dark.png'
</script>

# reacg

<ClientOnly>
  <Screenshot 
      :desktop="{light: desktopLight, dark: '待上传...'}"
      :pad="{light: '待上传...', dark: padDark}"
      :phone="{light: '待上传...', dark: phoneDark}"
  />
</ClientOnly>

## 介绍

- 👔 作者：[guangzan](https://www.cnblogs.com/guangzan/)
- 🎨 默认皮肤
- 🎀 二次元风格
- 🏆 覆盖 99% 的配置选项
- 🌓 深色模式
- 💻 兼容手机、平板、桌面

## 配置支持

- 基础配置
- 表情输入
- GitHub
- 个性签名
- 图片灯箱
- 深色模式
- 二维码
- 背景
- 图表
- 通知
- 锁屏
- Live2D 模型
- 音乐播放器
- 点击特效
- 码云
- 博文签名
- 代码高亮
- 代码行号
- 博文目录
- 按钮工具
- 打赏二维码
- 弹幕
- 自定义链接
- 画笔
- 博文头图
- 博文尾图
- 首页列表图片

## 使用

```js
const opts = {
  theme: {
    name: 'reacg',
  },
}
```
