# 配置选项

::: info 👋 Hi，亲爱的园友!
- 你可以在这里查看所有配置及其说明。所有配置都是通用的可选的，仅需添加或更改你需要的配置；所有配置都是通用的（如果对应皮肤支持）；
- 需要注意的是，不是所有皮肤都支持所有配置，我们希望不同皮肤都拥有其个性。如果你希望新增配置，请在交流群里交流或者在 Github 提个 Issue；
- 如果找到了需要的配置，而不知如何更改，请查看 [参考配置](/user/reference)；
- 当你编辑配置出现 JS 语法错误时，可能无法进入博客了。不用担心，随时都可以 [点击此处](https://i-beta.cnblogs.com/settings) 返回博客园管理页面。
:::

## 基础配置

| 属性             | 描述       | 值类型  | 默认值   | 可选值           |
| ---------------- | ---------- | ------- | -------- | ---------------- |
| name             | 皮肤名称   | string  | 'acg'    | 参考**所有皮肤** |
| color            | 主题色     | string  | 跟随皮肤 | -                |
| avatar           | 头像       | string  | -        | -                |
| title            | 网站标题   | string  | -        | -                |
| favicon          | 网站图标   | string  | -        | -                |
| headerBackground | 头图       | string  | -        | -                |
| log              | 控制台信息 | Boolean | false    | -                |


```javascript
theme: {
    name: 'geek',
}
```

::: details 获取博客园头像链接的步骤
1. 在你的博客首页点击管理，打开管理页面；
2. 在管理页面右上角，点击你的昵称；
3. 鼠标右击你的头像，复制图像链接，ok 🎉
:::

## 评论框表情

- 💻 不依赖第三方库
- 😀 自定义任何系统表情、文字表情、甚至图片链接

| 属性       | 描述         | 值类型       | 默认值 | 可选值 |
| ---------- | ------------ | ------------ | ------ | ------ |
| enable     | 是否启用     | Boolean      | true   | -      |
| emojiList  | 表情列表     | Array Object | -      | -      |
| buttonIcon | 表情按钮图标 | string       | "🍺"    | -      |

```javascript
emoji: {
  enable: true,
  buttonIcon: "🥳",
  emojiList: [
    { value: '🤣',label: '笑哭' },
    { value: '(=・ω・=)', label: '',},
    { value: 'https://images.cnblogs.com/cnblogs_com/gshang/1626876/o_2001050555139.png', label: ''},
  ]
}
```

## 个性签名

- 📮 炫酷的打字机效果
- 🎨 支持输出 HTML 标签以及内联样式
- 📦 依赖第三方库

| 属性     | 描述     | 值类型       | 默认值 | 可选值 |
| -------- | -------- | ------------ | ------ | ------ |
| enable   | 是否启用 | Boolean      | false  | -      |
| contents | 内容     | Array string | [ ]    | -      |

```javascript
signature: {
  enable: true,
  contents: [
    "This theme is built with <b style='color:#ff6b81'>awescnb</b>.",
    "<b>console.log(🍺);</b>",
  ],
}
```

## 图片灯箱

- 🏂 60 FPS 过渡动画
- 📑 兼容 markdown 和 TinyMCE 编辑器插入的图片
- 📦 依赖第三方库

| 属性   | 描述     | 值类型  | 默认值 | 可选值 |
| ------ | -------- | ------- | ------ | ------ |
| enable | 是否启用 | Boolean | true   | -      |

```javascript
imagebox: {
  enable: true,
}
```

## 深色模式

- 💻 不依赖第三方库
- 🟢 全局覆盖
- ⚽ 非线性过渡动画

| 属性        | 描述                   | 值类型  | 默认值 | 可选值 |
| ----------- | ---------------------- | ------- | ------ | ------ |
| enable      | 是否启用               | Boolean | true   | -      |
| darkDefault | 是否将默认模式设为深色 | Boolean | false  | -      |
| autoDark    | 夜间自动切换深色模式   | Boolean | false  | -      |
| autoLight   | 日间自动切换浅色模式   | Boolean | false  | -      |

```javascript
darkMode: {
  enable: true,
  autoDark: false,
  autoLight: false,
  darkDefault: false,
}
```

## 二维码

- 💻 不依赖第三方库
- 📝 支持添加描述信息

| 属性   | 描述           | 值类型  | 默认值 | 可选值 |
| ------ | -------------- | ------- | ------ | ------ |
| enable | 是否启用       | Boolean | false  | -      |
| img    | 二维码图片链接 | string  | 无     |        |
| desc   | 描述           | string  | 无     |        |

```javascript
qrcode: {
  enable: false,
  img: '',
  desc: '',
}
```

## 博客背景

- 💻 不依赖第三方库
- 🧮 支持 repeat 背景图片
- 💡 支持透明你的博客主体内容

| 属性    | 描述             | 值类型  | 默认值 | 可选值        |
| ------- | ---------------- | ------- | ------ | ------------- |
| enable  | 是否启用         | Boolean | false  | -             |
| value   | 图片链接或颜色值 | string  |        | 16 进制颜色值 |
| opacity | 内容的透明度     | string  | 1      | 0-1           |
| repeat  | 背景图片是否重复 | Boolean | true   | -             |


```javascript
bodyBackground: {
  enable: false,
  repeat: false,
  opacity: 0.85,
  value: 'https://guangzan.gitee.io/imagehost/awescnb/images/anime/22.jpg',
}
```

## 自定义图表

- 📦 依赖第三方库

| 属性     | 描述     | 值类型       | 默认值 | 可选值 |
| -------- | -------- | ------------ | ------ | ------ |
| enable   | 是否启用 | Boolean      | false  | -      |
| labels   | 选项     | Array        | [ ]    |        |
| datasets | 数据     | Array Object | [ ]    |        |

```javascript
charts: {
  enable: true,
  labels: ['Vue', 'React', 'Flutter', 'Java', 'NodeJs', 'TypeScript', 'CSS'],
  datasets: [
    {
      label: 'My First Chart',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)',
    },
  ],
}
```
## 博客通知

- 📦 依赖第三方库

| 属性   | 描述     | 值类型  | 默认值 | 可选值 |
| ------ | -------- | ------- | ------ | ------ |
| enable | 是否启用 | Boolean | false  | -      |
| text   | 文字     | Array   | -      | -      |

```javascript
notice:{
  enable:true,
  text:['🔯双击导航条锁屏', '🙃快去自定义通知吧'],
}
```
## 博客锁屏

- 📮 炫酷的打字机效果
- 🎨 支持输出 HTML 标签以及内联样式
- 📦 依赖第三方库
- 🔓 点击右上角 🔑 解锁
- 🎭 定义你喜欢的锁屏背景

| 属性       | 描述     | 值类型  | 默认值 | 可选值 |
| ---------- | -------- | ------- | ------ | ------ |
| enable     | 是否启用 | Boolean | true   | -      |
| background | 背景图片 | string  | 随机   |        |
| strings    | 文字     | Array   |        |        |

```javascript
lock: {
  enable: true,
  background: '',
  strings: [
    '<i>Powered by</i> webpack.',
    '&amp; Theme in awescnb',
    '快去自定义您的个性签名吧~',
  ],
}
```

> `<i>`是斜体【属于 HTML 标签】，`&amp;`是&【属于 HTML 转义字符】。附参考文档：[HTML 转义字符](https://tool.oschina.net/commons?type=2)&[HTML 标签](https://baike.baidu.com/item/html%E6%A0%87%E7%AD%BE)

## Live2D 模型

- 🎭 提供多套模型
- 🎲 支持自动模式（不推荐）
- 📦 依赖第三方库

| 属性     | 描述     | 值类型  | 默认值    | 可选值         |
| -------- | -------- | ------- | --------- | -------------- |
| enable   | 是否启用 | Boolean | true      | -              |
| model    | 模型     | string  | 'haru-01' | 见下方         |
| width    | 宽度     | Number  | 150       |                |
| height   | 高度     | Number  | 200       |                |
| position | 位置     | string  | 'right'   | 'left' 'right' |
| gap      | 边距     | string  | 'default' | '100px ...'    |

```javascript
live2d: {
  enable: true,
  page: 'all',
  agent: 'pc',
  model: 'haru-01',
  width: 150,
  height: 200,
  position: 'left',
  gap: 'default',
}
```

🎭 **可选模型**

- 'random' -> 随机(并不推荐)
- 'chitose'
- 'epsilon2_1'
- 'haru-01'
- 'haru-02'
- 'hijiki'
- 'tororo'
- 'ert_classic'
- 'vert_normal'
- 'vert_swimwear'
- 'ryoufuku'
- 'seifuku'
- 'shifuku'
- '小埋'
- '玉藻前'
- '伊芙加登'
- ....

欢迎给我们的 live2d 模型 [仓库](https://github.com/awescnb/awesCnb-live2dModels) 提 PR

## 音乐播放器

-  📦 依赖第三方库

| 属性     | 描述     | 值类型            | 默认值 | 可选值 |
| -------- | -------- | ----------------- | ------ | ------ |
| enable   | 是否启用 | Boolean           | true   | -      |
| autoplay | 自动播放 | Boolean           | true   | -      |
| volume   | 默认音量 | Number            | 0.4    |        |
| lrc      | 歌词     | Object            |        |        |
| audio    | 音乐列表 | `[object Object]` | -      |        |

```javascript
musicPlayer: {
  enable: true,
  autoplay: false,
  lrc: {
    enable: true,     // 启用歌词
    type: 1,          // 歌词类型  1 -> 字符串 3 -> url
    color: '#10ac84', // 颜色
  },
  audio: [
    {
      name: '404 not found',
      artist: 'REOL',
      url: 'http://music.163.com/song/media/outer/url?id=436016480.mp3',
      cover: 'http://p2.music.126.net/cu1sEIDxXOJm5huZ3Wjs0Q==/18833534672880379.jpg?param=300x300',
      lrc: "[ti:404 not found][ar:REOL][al:Σ][by:菜籽酱][00:00.000] 作曲 : Reol[00:00.008] 作词 : Reol[00:00.25][00:01.69]fade away...do over again...[00:13.35][00:13.76]歌い始めの一文字目 いつも迷ってる[00:18.57]どうせとりとめのないことだけど[00:22.85]伝わらなきゃもっと意味がない[00:26.84][00:27.38]どうしたってこんなに複雑なのに[00:30.75]噛み砕いてやらなきゃ伝わらない[00:34.18]ほら結局歌詞なんかどうだっていい[00:37.64]僕の音楽なんかこの世になくたっていいんだよ[00:41.32][00:54.74]Everybody don't know why.[00:58.20]Everybody don't know much.[01:01.56]僕は気にしない 君は気付かない[01:04.99]何処にももういないいない[01:08.17][01:08.59]Everybody don't know why.[01:11.86]Everybody don't know much.[01:15.25]忘れていく 忘れられていく[01:18.61]We don't know,We don't know.[01:22.86][01:39.61]目の前 広がる現実世界がまた歪んだ[01:46.30]何度リセットしても[01:47.57]僕は僕以外の誰かには生まれ変われない[01:51.88]「そんなの知ってるよ」[01:53.41]気になるあの子の噂話も[01:56.52]シニカル標的は次の速報[01:59.75][02:00.22]麻痺しちゃってるこっからエスケープ[02:03.57]遠く遠くまで行けるよ[02:06.71][02:07.15]安定なんてない 不安定な世界[02:14.04]安定なんてない きっと明日には忘れるよ[02:20.52][02:22.35]fade away...do over again...[02:33.62][02:34.41]そうだ世界はどこかがいつも嘘くさい[02:37.51]綺麗事だけじゃ大事な人たちすら守れない[02:41.06]くだらない 僕らみんなどこか狂ってるみたい[02:44.48]本当のことなんか全部神様も知らない[02:48.56][03:03.39]Everybody don't know why.[03:06.80]Everybody don't know much.[03:10.17]僕は気にしない 君は気付かない[03:13.62]何処にももういないいない[03:17.02][03:17.46]Everybody don't know why.[03:20.49]Everybody don't know much.[03:23.88]忘れていく 忘れられていく[03:27.18]We don't know,We don't know.[03:29.83]",
    },
  ],
}
```

::: tips
🎵 获取音乐链接以及歌词：[https://music.liuzhijin.cn/](https://music.liuzhijin.cn/)
:::

## 点击特效

- 💻 不依赖第三方库
- 🐱‍👤 炫酷的例子效果
- 🎨 自定义粒子颜色

| 属性   | 描述                     | 值类型  | 默认值  | 可选值 |
| ------ | ------------------------ | ------- | ------- | ------ |
| enable | 是否启用                 | Boolean | true    | -      |
| auto   | 进入页面自动产生点击特效 | Boolean | true    | -      |
| colors | 颜色列表                 | Boolean | [ ... ] | -      |


```javascript
click: {
  enable: true,
  auto: false,
  colors: ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'],
  size: 30,
  maxCount: 50,
}
```

## GitHub

| 属性       | 描述     | 值类型  | 默认值    | 可选值 |
| ---------- | -------- | ------- | --------- | ------ |
| enable     | 是否启用 | Boolean | true      | -      |
| background | 图标颜色 | string  | '#FFB3CC' | -      |
| url        | 链接     | string  | ""        | -      |

```javascript
github: {
  enable: true,
  color: '#ffb3cc',
  url: 'https://github.com/cnbloglabs',
}
```

## 码云

- 💻 不依赖第三方库

| 属性       | 描述     | 值类型  | 默认值    | 可选值 |
| ---------- | -------- | ------- | --------- | ------ |
| enable     | 是否启用 | Boolean | true      | -      |
| background | 图标颜色 | string  | '#C71D23' | -      |
| url        | 链接     | string  | ""        | -      |

```javascript
gitee: {
  enable: true,
  color: '#C71D23',
  url: 'https://gitee.com/guangzan/awescnb',
}
```

## 博文签名

- 💻 不依赖第三方库

| 属性          | 描述                 | 值类型  | 默认值                                            |
| ------------- | -------------------- | ------- | ------------------------------------------------- |
| enable        | 是否启用             | Boolean | true                                              |
| enableLicense | 是否启用版权信息说明 | Boolean | true                                              |
| link          | 版权链接             | string  | ""                                                |
| content       | 自定义内容           | Array   | []                                                |
| licenseName   | 许可协议名称         | string  | '知识共享署名-非商业性使用-禁止演绎 2.5 中国大陆' |
| licenseLink   | 许可协议链接         | string  | ''                                                |

```javascript
postSignature: {
  enable: true,
  enableLicense: true,
  licenseName: '',
  licenseLink: '',
  content: ['这是一条自定义内容', '这是一条自定义内容'],
}
```

生成的 HTML 结构：

```html
<div id="post-signature">
  <p>本文作者：DIVMonster</p>
  <p>本文链接：https://www.cnblogs.com/guangzan/p/12886111.html</p>
  <p>版权声明：本作品采用<a href="xxxx">知识共享署名-非商业性使用-禁止演绎 2.5 中国大陆许可协议</a>进行许可。</p>
  <p>这是一条自定义内容</p>
  <p>这是一条自定义内容</p>
</div>
```

## 博文目录

- 💻 不依赖第三方库
- 📑 不仅仅支持 markdown，还支持博客园其他编辑器编辑的博文

| 属性     | 描述     | 值类型  | 默认值 | 可选值                   |
| -------- | -------- | ------- | ------ | ------------------------ |
| enable   | 是否启用 | Boolean | true   | -                        |
| position | 目录位置 | string  | 'left' | 'sidebar' 'left' 'right' |


```javascript
catalog: {
  enable: true,
  position: 'left',
}
```

## 按钮工具

- 💻 不依赖第三方库

| 属性        | 描述         | 值类型  | 默认值 | 可选值 |
| ----------- | ------------ | ------- | ------ | ------ |
| enable      | 是否启用     | Boolean | true   | -      |
| initialOpen | 是否自动展开 | Boolean | true   | -      |


```javascript
tools: {
  enable: true,
  initialOpen: true,
}
```

## 打赏二维码

- 💻 不依赖第三方库
- 🟢 可以添加 4 个二维码

| 属性    | 描述           | 值类型  | 默认值 | 可选值 |
| ------- | -------------- | ------- | ------ | ------ |
| enable  | 是否启用       | Boolean | true   | -      |
| qrcodes | 二维码图片链接 | Array   | []     |        |

```javascript
donation: {
  enable: true,
  qrcodes: [],
}
```

## 弹幕

- 💻 不依赖第三方库

| 属性              | 描述                         | 值类型  | 默认值 | 可选值 |
| ----------------- | ---------------------------- | ------- | ------ | ------ |
| enable            | 是否启用                     | Boolean | false  | -      |
| opacity           | 是否弹幕透明度启用           | Number  | 0.6    | 0-1    |
| colors            | 颜色列表                     | Array   | 内置   |        |
| fontSize          | 字体大小                     | string  | '16px' |        |
| barrages          | 全局弹幕（所有页面都会发送） | Array   | [ ]    |        |
| indexPageBarrages | 首页弹幕                     | Array   | [ ]    |        |
| postPageBarrages  | 博文页弹幕                   | Array   | [ ]    |        |

```javascript
barrage: {
  enable: false,
  opacity: 0.6,
  colors: [],
  barrages: [],
  indexBarrages: [],
  postPageBarrages: [],
}
```

## 自定义链接

- 💻 不依赖第三方库

```javascript
links: [
  { name: 'xxx', link: 'xxx'},
  { name: 'xxx', link: 'xxx'},
]
```

## 模拟笔触 <Badge type="warning" text="beta" />

- 📝 将部分 Markdown 文本样式（例如下划线、删除线）使用拟真画笔代替
- 📦 依赖第三方库

| 属性   | 描述     | 值类型  | 默认值 | 可选值 |
| ------ | -------- | ------- | ------ | ------ |
| enable | 是否启用 | Boolean | true   | -      |

```javascript
notation: {
  enable: true,
}
```

## 博文头图

- 💻 不依赖第三方库

| 属性   | 描述          | 值类型  | 默认值 | 可选值 |
| ------ | ------------- | ------- | ------ | ------ |
| enable | 是否启用      | Boolean | true   | -      |
| fixed  | 视差滚动      | Boolean | false  | -      |
| imgs   | 图片 url 列表 | Array   | []     |        |

```javascript
postTopimage: {
  enable: true,
  imgs: [],
}
```
> 原来的 position bottom API 已经启用使用 postBottomimage 选项代替

## 博文尾图

- 💻 不依赖第三方库

| 属性   | 描述     | 值类型  | 默认值  | 可选值 |
| ------ | -------- | ------- | ------- | ------ |
| enable | 是否启用 | Boolean | false   | -      |
| img    | 图片链接 | string  | ''      |        |
| height | 图片高度 | string  | '200px' |        |

```javascript
postBottomimage: {
  enable: false,
  img: '',
  height: '',
}
```

## 首页列表图片

- 💻 不依赖第三方库
- 🟢 支持自定义图片列表

| 属性   | 描述          | 值类型  | 默认值 | 可选值 |
| ------ | ------------- | ------- | ------ | ------ |
| enable | 是否启用      | Boolean | false  | -      |
| imgs   | 图片 url 列表 | Array   | 内置   |        |

```javascript
indexListImg: {
  enable: false,
  imgs: [],
}
```

## 头部进度条 <Badge type="danger" text="deprecated" />

- 📦 依赖第三方库

| 属性       | 描述     | 值类型  | 默认值    | 可选值 |
| ---------- | -------- | ------- | --------- | ------ |
| enable     | 是否启用 | Boolean | true      | -      |
| background | 背景色   | string  | '#FFB3CC' |        |
| height     | 高度     | string  | '5px'     |        |

```javascript
topProgress: {
  enable: false,
  page: 'all',
  agent: 'pc',
  background: '#FFB3CC',
  height: '5px',
}
```
