# 小程序

## 小程序的概念

小程序是一种不需要下载，安装即可使用的应用
特点：无需下载（小程序体积非常小（不超过 2M），用户感知不到下载的过程）。

理念：用完即走（用户随时退出小程序，不需要关注小程序本身）

入口：扫一扫，链接......

## 注册账号

开发微信小程序首先要在微信公众平台申请小程序账号，通过这个账号对小程序的开发进行管理，完成注册获取 AppID 微信开发者工具[#](http://enjoy-plus.botue.com/wechat/#_1-5-微信开发者工具)

微信开发者工具是官方提供的专门用于微信小程序开发调试的工具，它提供的主要功能如下：

- 快速创建小程序项目（起到脚手架的作用）
- 代码的查看和编辑（相当于 vs code 作用）
- 对小程序功能进行调试（相当于浏览器作用）
- 小程序的预览和发布

[下载](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)并安装微信开发者工具，双击下载好的微信开发者工具，然后后根据引导下一步、下一步操作直到完成，首次打开微信开发者工具时需要先进行登录（打开手机微信扫码登录）。

### 创建小程序

1.点击+号，新建创建项目 2.填写信息，填写获取的 AppID 3.启动小程序项目
目录结构 ：4 种文件类型
.wxml 用于页面的布局结构，相当于网页 html 必须存在
.wxss 用于页面的样式，相当于网页中的.css 文件
.js 用于页面的逻辑 必须存在
.json 用于页面的配置
这 4 种文件类型的文件共同构成的且四个文件必须是相同的名字

### 页面导航布局

view 定义一个块级元素 相当于 html 中 div 标签
text 定义一个行内元素 相当于 html 中的 span 标签
小程序页面布局中的样式几乎和网页的 css 是一样的
样式文件不需要引入到页面当中，它是自动引入并生效，但是要求页面文件的名称和样式的文件必须要一致

### 小程序适配

小程序主要是运行在手机端，也需要像移动 Web 一样处理不同大小屏幕的适配，它提供了专门的长度单位 rpx 它会自动的根据屏幕的大小转换成 px

- 如果设计稿是 750px 时，设计稿中是多少 px 在小程序中就写成多少 rpx，即 1 : 1 的关系。
- 如果设计稿是 375px 时，设计算中是多少 px 在小程序中就写在 2 倍的 rpx，即 1 : 2 的关系。

实际开发当中设计稿的尺寸都是【以 `750px` 做为基准】，因此只需要将设计稿中看到的尺寸写成相应的 `rpx` 即可。

### 轮播图交互

swiper 滑块视图容器
swiper-item 可滑动的区块（用在 swiper 内部）
image 加载图片 <u>与 html img 名称有区别</u>
可以通过组件的一些属性 来对轮播图的功能进行配置

### js 文件配置

每个页面的 .ts 文件中**必须调用**一个内置全局的函数 `Page`

Page 函数的配置项及其含义：

| 选项 | 含义             | 说明                      |
| ---- | ---------------- | ------------------------- |
| data | 定义页面初始数据 | 类似 vue 组件的 data 函数 |

**注：**小程序中页面的 data 不需要是一个函数 因为同一时间点 只会存在一个页面实例

与 Vue 的语法几乎一样

**注:**
做为对比 Vue 学习，Vue 中方法都是定义在 methods 属性当中，小程序页面中则是直接定义的，这点一定要注意区分。

1.事件监听
小程序中绑定事件处理函数时，不能加小括号
传参 用自定义属性 data-id = "1"

```javascript
  fn(e){
    console.log('点击了',e)
    // 用e  来接传的参数
    console.log(e.target.dataset)
    // 小程序不是浏览器  没有DOM和BOM  只有ECMScript基本语法
    console.log(document)   //undefined
    let arr1 = this.data.arr
    arr1[1] =6
    this.setData({
      msg:'Hello',
     ["user.name"]:'hz',
     'arr[0]':9
    })
    // 视图更新还是异步的
  },
```

2.更新数据

在 data 中定义的数据，**注：**小程序中修改数据并不是直接进行赋值，而是通过调用 this.setData 方法才能实现

```js

Page({
  data: {
    msg: '大家好，这是我开发的第一个小程序！',
    // 初始值为 1
    num: 1,
  },
  sayHi() {
    // 省略...
  },
  // 购物车数量加1
  increment() {
    this.setData({
      num: this.data.num + 1,
    })
  },

  },
})

```

```html
<button type="primary" bind:tap="increment">-</button>
<input value="{{num}}" />
<button type="primary" bind:tap="decrement">+</button>
```

**注：** 为组件的属性绑定数据时 也必须是插值表达式，而不是跟 vue 一样 用 ：属性 来绑定

### 小程序配置

小程序的配置如窗口的颜色、标题、自定义组件、底部 tab 栏等都是通过配置文件来实现的，即.json 类型的文件
配置文件又分为 全局配置 和 页面配置  
全局配置

| 配置项        | 类型     | 是否必须 | 说明                  |
| ------------- | -------- | -------- | --------------------- |
| pages         | string[] | 是       | 页面路径列表          |
| window        | object   | 否       | 全局的默认窗口表现    |
| tabBar        | object   | 否       | 底部' `tab`' 栏的表现 |
| entryPagePath | string   | 否       | 小程序默认启动首页    |

1. `pages` 的值是一个数组，所有页面的路径都要写在这个数组里，**否则页面无法被访问到**，数组的第一个单元为小程序的启动首页。

   ```js
   {
     "pages": ["pages/index/index", "pages/logs/logs"]
   }

   ```

   创建页面时会自动将这个页面的路径添加进来

   | 组件名    | 作用     | 与 htm 对比             |
   | --------- | -------- | ----------------------- |
   | navigator | 地址跳转 | 相当于 html 中的 a 标签 |

上述两种情况都可以正常的跳转到 demo 页面，但是如果将 `app.json` 中的 demo 页面路径删除后，则不能成功跳转了（点击跳转链接后没有任何反应），因此我们必须要把页面的路径填写到 `pages` 的配置项中。

2.`window` 的值是一个对象，通过它可以全局配置小程序的状态栏、导航条、标题、窗口背景色。

```JSON
{
  "pages": [
    "pages/index/index",
    "pages/logs/logs",
    "pages/demo/demo"
  ],
  "window": {
    "navigationBarTitleText": "小程序示例",
    "navigationBarTextStyle": "white",
    "navigationBarBackgroundColor": "#f5a11c",
    "enablePullDownRefresh": true
  }
}

```

3.`tabBar` 定义小程序 tab 栏的表现，如下图即所谓的 tab 栏：

```JSON
"tabBar": {
    "color": "#999",
    "selectedColor": "#e93b3d",
    "backgroundColor": "#fff",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "static/tabbar/home-default.png",
        "selectedIconPath": "static/tabbar/home-active.png"
      },
      {
        "pagePath": "pages/logs/logs",
        "text": "日志",
        "iconPath": "static/tabbar/video-default.png",
        "selectedIconPath": "static/tabbar/video-active.png"
      },
      {
        "pagePath": "pages/index/demo",
        "text": "示例",
        "iconPath": "static/tabbar/face-default.png",
        "selectedIconPath": "static/tabbar/face-active.png"
      }
    ]
  }
```

**页面配置**，顾名思义页面配置只针对某个页面生效，如 `index.json` 是针对 `index` 页面生效，`demo.json` 是针对页面 `demo` 生效。

页面的部分配置可以覆盖全局 `app.json` 中的配置

### 字体图标

静态资源不支持本地路径，只能使用网络路径（http 或 https）或者 base64，因此在引用字体标时不要写本地路径：

```css
@font-face {
  font-family: "iconfont";
  src: 
    /* base64 */ url("data:application/x-font-woff2;charset=utf-8;base64,...省略了很多内容.....GcVBx6Px=")
      format("woff2"), /* 网络路径 */
      url("//at.alicdn.com/t/c/font_3632516_mz9ho2m68ee.woff?t=1666346579367")
      format("woff"),
    url("//at.alicdn.com/t/c/font_3632516_mz9ho2m68ee.ttf?t=1666346579367")
      format("truetype");
}
```

上述的代码中 base64 部分内容不全不要直接粘贴使用，要自已去 `iconfont` 创建自已的字体文件。
`.wxss` 中使用图片资源的:

```css
.box {
  width: 200rpx;
  height: 200rpx;
  /* 本地路径不支持 */
  /* background-image: url('/assets/xxx.jpg') */
  background-image: url("https://xxx.com/uploads/xxx.jpg");
}
```

注意:

全局配置 tabBar 中的图片只能使用本地路径不支持网络路径，切记切记！！！

### 开发调试

1.调试器 2.预览和真机调试
![图片](/applet/1.png)

3.编译模式
![图片](/applet/2.png)
![图片](/applet/3.png)

4.刷新和热重载注意:

注：`.json` 类型文件和 `app.js` 不支持热重载的功能，代码修改后会重新编译整个小程序。

### 发布上线

1.小程序上传
![图片](/applet/4.png)
在上传小程序代码时有一点大家需要注意，微信官方要求小程序的体积不能超过 2M，超过 2M 时上传不会成功，要解决这个问题可以**采用分包**的功能

2.文件忽略
项目中一些与代码逻辑无关的文件 可以忽略 或者可以将不用的文档和图片删除
在 `project.config.json` 中进行配置忽略文件：

```json
{
  "miniprogramRoot": "miniprogram/",
  "packOptions": {
    "ignore": [
      { "type": "folder", "value": "static/uploads" },
      { "type": "file", "value": "ui.zip" }
    ]
  }
}
```

- `"type": "folder"` 忽略文件目录，`"value"` 用来指明具体忽略的文件目录

- `"type": "file"` 忽略文件，`"value"` 用来指明具体忽略的文件

- 注意:

  被忽略的文件不会被打包到小程序项目当中，因此如果项目中引用了这些图片，图片将无法被加载显示。

  3.体验版
  上一步骤只是将代码上传到了小程序的官方服务器上，普通用户还是无法通过小程序商店搜索到，此时可以先将小程序设定为【体验版本】，通过添加或申请体验权限来访问小程序。 4.提交审核
  小程序全面测试完毕后还需要提交给小程序官方审核，主要是看小程序[有无违规的内容](https://developers.weixin.qq.com/community/develop/doc/000c266f094ab00976ad5c0d251809)。

  5.发布

### 模板语法

1.双向绑定
小程序中通过插值语法，即双大括号实现数据的绑定，重点要注意对【属性的绑定】使用的仍然采用插值语法

实现双向绑定 语法 **注**：<u>小程序的双向绑定 不能进行深层次绑定</u>

```html
<input name="number" model:value="{{msg}}" />
```

不是所有的表单元素都支持数据双向绑定，其中 `input`、`textarea`、`slider` 组件可以支持。 不支持时可以分开 用属性绑定 和 触发事件来实现双向绑定

```html
<swiper autoplay="false">
  <swiper-item>
    <image src=""></image>
  </swiper-item>
  ...
</swiper>
```

上述代码中 `autoplay="false"` 并不会禁止自动轮播，这里的 `false` 会被当成字符串，并不是表达式，因此这里不是布尔类型的值，要表示布尔类型的值必须写成`autoplay="{{ false }}"`，`{{}}` 中的内容会当成表达式来进行解析。

列表渲染

小程序提供了一个指令 `wx:for` 类似于 Vue 中的 `v-for`基本的语法格式[#](http://enjoy-plus.botue.com/wechat/template.html#_1-2-1-基本的语法格式)
`wx:for` 的语法格式为 `wx:for="{{ 数据名称 }}"` ，并且**内置默认**通过 `index` 获取数组的**索引值**，`item` 访问**数组的单元值**
![图片](/applet/5.png)

上述警告是由于在使用 `wx:for` 时没有指定 `wx:key` 属性，这个 `wx:key` 属性的作用于 Vue 中一样的，但是语法稍有不同上述代码中 `wx:key` 属性的值要求必须具有唯一性，使用时分成两种情形：

- 数组单元为简单类型数据时，使用 `*this` 指定为 `wx:key` 的值
- 数组单元是对象类型时，只要写对象的属性名

自定义访问单元值和索引值[#](http://enjoy-plus.botue.com/wechat/template.html#_1-2-2-自定义访问单元值和索引值)

开发中 `wx:for` 的嵌套是比较常见的，外层 `wx:for` 和内层的 `wx:for` 都使用 `index` 和 `item` 来访问数组的索引和单元，会使得代码的易读性比较差，这种情况下通过 `wx:for-index` 和 `wx:for-item` 来分别指定如何访问数组的索引值和单元值

条件渲染
wx:if hidden[#](http://enjoy-plus.botue.com/wechat/template.html#_1-3-2-hidden)
除了使用 `wx:if` 来控制元素的显示外，还可以使用 `hidden` 属性来实现相同的结果。对比 `wx:if` 和 `hidden` 二者的区别：

- `wx:if` 在条件为 `true` 时会将内容渲染出来，否则不会进行渲染，是通过【添加/删除】节点的方式来实现的。
- `hidden` 在条件为 `true` 时会隐藏内容，否则会显示内容，是通过 `display` 样式属性来实现的。

wx:else[#](http://enjoy-plus.botue.com/wechat/template.html#_1-3-3-wx-else)

根据条件来渲染页面经常需要处理两种状态，如用户已登录则可以完善用户信息，未登录则必须先进行登录，这种场景会用于 `wx:else` 来处理

block[#](http://enjoy-plus.botue.com/wechat/template.html#_1-3-4-block) block 标签本身并不会被渲染到页面当中，它一般只用于分组控制内容的渲染，也可以用 wx:for

`block` 是小程序中一个特殊的标签，用于分组控制页面元素的渲染，通过会配合 `wx:for` 和 `wx:if` 来使用

### 生命周期

在开发小程序时也有专门的生命周期函数，分为应用级别、页面级别和组件级别 3 种类型

#### 应用级别

应用级别的生命周期函数定义在 `app.js` 当中

| 生命周期 | 必填 | 说明                                |
| :------: | :--: | :---------------------------------- |
| onLaunch |  否  | 监听小程序初始化，全局只会执行 1 次 |
|  onShow  |  否  | 监听小程序启动或切前台              |
|  onHide  |  否  | 监听小程序切后台                    |

用户在点击右上角的胶囊关闭小程序时，小程序并示被销毁，只是将小程序置于后台运行了，因此小 onLaunch 并不会重复执行。 当小程序执行停留在后台约 5 分钟后小程序会自动被销毁，再次打开小程序时 onLaunch 会再次被执行。

通过应用级别的生命周期可以进行一些全局性的设置，如检测用户的登录状态（后期项目中会用到）、获取小程序的场景值等。
所谓的场景描述的是用户打开小程序的方式，如扫码、搜索、分享等，并且每个场景都对应了一个数值，

| 场景值 ID | 说明                           |
| --------- | ------------------------------ |
| 1001      | 发现栏小程序主入口             |
| 1011      | 扫描二维码                     |
| 1007      | 单人聊天会话中的小程序消息卡片 |

获取小程序的声景值只能在全局生周期函数 `onLaunch`、`onShow` 中获取

#### 页面级别

页面级别的生命周期函数写在页面对应的页面 `.js` 当中：

| 生命周期 | 必填 | 说明                                |
| :------: | :--: | :---------------------------------- |
|  onLoad  |  否  | 监听页面加载，只会执行 1 次         |
|  onShow  |  否  | 监听页面显示                        |
| onReady  |  否  | 监听页面初次渲染完成，只会执行 1 次 |
|  onHide  |  否  | 监听页面隐藏                        |
| onUnload |  否  | 监听页面卸载                        |

- onLoad 和 onReady 只会执行 1 次
- onShow 和 onHide 会重复执行
- 普通链接跳转及切换 Tab 页面不会卸载，页面处理隐藏的状态

在开发中页面的生命周期函数会使用非常频繁，根据生命周期的不同特性用法也千变万化，我们先来看 `onLoad` 的一般用法，其它生命周期的应用后续开发中结合需求再做介绍。

![图片](/applet/6.png)

### 获取地址参数[#](http://enjoy-plus.botue.com/wechat/lifetimes.html#_2-2-2-获取地址参数)

小程序在进行页面跳转时可以在跳转地址上通过 `?` 来拼凑参数，这些参数通过 `onLoad` 生命周期函来获取，用法如下所示：

我们在首页面添加一个链接使其跳转到 `logs` 页面，并且在地址上通过 `?` 来拼凑一些参数：

```html
<!-- page/index/index.wxml -->
<!-- 省略前面小节的代码 -->
<navigator url="/pages/logs/logs?name=小明&age=18">跳转到日志页面</navigator>
```

获取地址上的参数应该到日志页面的 `onLoad` 中获取
![图片](/applet/7.png)

### 内置 API

1.网络请求
wx.request`API 是用来发起网络请求的，类似于网页中的`ajax

```javascript
// pages/index/index.js
// 小程序发起网络请求（调用接口）的方法
wx.request({
  // 接口地址
  url: "api/path/xxx",
  // 请求的方法
  method: "GET｜POST|PUT",
  // 请求时的数据
  data: {},
  success(res) {
    // 成功响应的回调
  },
  // ...
});
```

小程序规定 `wx.request` 调用接口的服务器地址（域名）必须事先在小程序的管理后台进行设置，否则是不允许发起网络请求，如何解决这个问题呢？有两种方式：

- 在小程序管理后台进行设置

- 在小程序开发工具中进行设置

- 注意:

  域名有个严格的要求：**必须**是 `https` 协议且已备案！
  ![图片](/applet/8.png)

界面交互加载提示[#](http://enjoy-plus.botue.com/wechat/api.html#_3-2-1-加载提示)

加载提示框常配合网络请求来使用，用于增加用户体验，对应的 API 有两个，分别为：

- `wx.showLoading` 显示加载提示框

- `wx.hideLoading` 隐藏加载提示框

  ```js
  // 显示加载提示
  wx.showLoading({
    title: "正在加载...",
    mask: true,
  });
  // 隐藏加载提示
  wx.hideLoading();
  ```

  在调用 `wx.showLoading` 时可以传入以下参数：

  - `title` 指定显示的文字提示内容（不能省略）
  - `mask` 提供一个透明层阻止对页面其它内容进行操作
  - `success` 显示加载提示框成功后的回调（很少用到）
  - `fail` 显示加载提示框失败后的回调（很少用到）
  - `complete` 显示加载提示框完成后的回调（包括成功和失败两种情况）

#### 信息反馈

信息反馈是指根据用户的某些操作来告知操作的结果，如用户点击加入购物车，提示用户添加成功，用户提交表单提示用户表单验证的结果等，对应的 API 是 `wx.showToast`

```javascript
wx.showToast({
  title: "姓名只能为汉字!",
  duration: 2000,
  mask: true,
  icon: "success",
});
```

#### 本地存储

小程序中也能够像网页一样支持本地存储数据，用于在本地存一些临时性的数据，比如包含的用户登录状态 token 等，其包含以下 4 个主要的 API：

- `wx.setStorageSync` 在本地存入一个数据
- `wx.getStorageSync` 读取本地的一个数据
- `wx.removeStorageSync` 删除本地存储的一个数据
- `wx.clearStorageSync` 清空本地存储的数据

提示:

小程序中也能够像网页一样支持本地存储数据，用于在本地存一些临时性的数据，比如包含的用户登录状态 token 等，其包含以下 4 个主要的 API：

- `wx.setStorageSync` 在本地存入一个数据
- `wx.getStorageSync` 读取本地的一个数据
- `wx.removeStorageSync` 删除本地存储的一个数据
- `wx.clearStorageSync` 清空本地存储的数据

在小程序中 `Sync` 结尾的 API 指的是同步方式执行，同步方式执行的 API 在使用时简洁比较好，但缺点是同步会阻塞程序执行，执行效率上相较异步版本要差一些。
存入数据[#](http://enjoy-plus.botue.com/wechat/api.html#_3-3-1-存入数据)

如下代码所示调用 API `wx.setStorageSync` 在小程序本地存入数据

```javascript
// pages/storage/index.js
Page({
  // 存入本地数据
  setStorage() {
    wx.setStorageSync("name", "小明");
    // 可以直接存入对象，无需 JSON.stringify 处理
    wx.setStorageSync("user", { name: "小明", age: 18 });
  },
});
```

#### 头像昵称填写

用户头像[#](http://enjoy-plus.botue.com/wechat/api.html#_3-4-1-用户头像)

**获取用户头像必须用到 `button` 组件，且用户必须要主动点击 `button` 按钮，以下是 `button` 的使用细节：**

- 设置 `button` 的属性 `open-type` 值为 `chooseAvatar`

- 监听 `button` 的 `chooseavatar` 事件

- 注意:

  open-type 的属性值 chooseAvatar (有大写字母)，事件类型 chooseavatar (全部小写字母)。
  如上图所示用户点击了按钮后会弹出一个选择列表，无论是选择微信头像、相册选择、还是拍照都会触发事件 `chooseavatar`，在事件回调函数中来获取用户头像的图片地址：

  ```js
  <!-- pages/profile/index.wxml -->
  <view class="profile">
    <view class="avatar">
      <button
        open-type="chooseAvatar"
        bind:chooseavatar="getUserAvatar"
      >
        <image src="{{profile.avatarUrl}}"></image>
      </button>
    </view>
    <view class="nickname">
      <label for="">昵称:</label>
      <input type="text" value="{{profile.nickName}}" />
    </view>
    <button class="save" type="primary">保存</button>
  </view>

  ```

  在事件回调 `getUserAvatar` 中获取到用户的头像地址，通过这个地址就可以将用户设置的头像展示到页面当中了。

  ```js
  // pages/profile/index.js
  Page({
    data: {
      profile: {
        avatarUrl: "/static/images/avatar.png",
        nickName: "微信用户",
      },
    },
    // 获取用户头像
    getUserAvatar(ev) {
      // 获取头像对应的地址
      // console.log(ev.detail.avatarUrl)
      this.setData({
        "profile.avatarUrl": ev.detail.avatarUrl,
      });
    },
  });
  ```

  **此时得到的头像地址是临时地址，只能在小程序内部使用，要实现永久存储需要将这个图片上传给自已的服务端，文件上传会用到 `wx.uploadFile`**

  ```js
  // pages/profile/index.js
  Page({
    // 省略部分代码...
    getUserAvatar(ev) {
      this.setData({
        "profile.avatarUrl": ev.detail.avatarUrl,
      });

      // 上传临时文件
      wx.uploadFile({
        url: "http://ajax-api.itheima.net/api/file",
        filePath: ev.detail.avatarUrl,
        name: "avatar",
        success: (res) => {
          console.log(res);
        },
      });
    },
  });
  ```

  **获取用户头像必须用到 `input` 组件，当 `input` 获得焦点后小程序会自动展示用户的昵称 以下是 `input` 的使用细节：**

  - 设置 `input` 的 `type` 属性值为 `nickname`
  - 监听 `input` 组件的 `input` 、`blur` 、`change` 等事件获取表单中的值
  - 在事件回调 getUserNickName 中获取到用户昵称，然后将昵称展示到页面当中。

#### 路由

小程序中的路由其实单纯只是页面的跳转，一般在页面中使用 `navigator` 组件来实现，也有很多场景需要在 js 中根据逻辑的执行结果跳转到某个页面，比如检测到用户尚未登录就跳转到登录页面。

wx.navigateTo[#](http://enjoy-plus.botue.com/wechat/api.html#_3-5-1-wx-navigateto)

`wx.navigateTo` 跳转到一个新的页面，会新增一种历史记录

```js
// /pages/router/index.js
Page({
  // 普通的跳转
  navigateTo() {
    wx.navigateTo({
      url: "/pages/logs/logs?name=小刚&age=19",
      success() {},
    });
  },
});
```

通过 `wx.navigateTo` 跳转页面通过左上角的能够实现返回操作，如果要跳转的页面路径是一个 tabBar 的页时，不能使用 `wx.navigateTo`。

wx.redirectTo[#](http://enjoy-plus.botue.com/wechat/api.html#_3-5-2-wx-redirectto)

`wx.redirectTo` 跳转到一个新的页面，**不会新增一种历史记录**，替换掉当前页面

wx.navigateBack

`wx.navigateBack` 返回页面，参数 `delta` 可以指定返回前几个页面。

其它[#](http://enjoy-plus.botue.com/wechat/api.html#_3-6-其它)

小程序中大部分的 API 都是异步方式执行，异步 API 传入的都是对象类型的参数，且都可以传入 `success`、`fail`、`complete` 回调函数。

也有少部分 API 是同步方式执行，同步方式的 API 有个特点就是均以 `Sync` 结尾。

### npm 支持

### miniprogram-computed 小程序计算属性和监听器 `watch`

小程序自定义组件扩展 behavior，计算属性 `computed` 和监听器 `watch` 的实现。在 data 或者 properties 改变时，会重新计算 `computed` 字段并触发 `watch` 监听器。
npm install --save miniprogram-computed
![图片](/applet/9.png)

1.默认构建
小程序不能直接使用 npm 下载的模块包，必须经过小程序开发者工具进行构建才可以使用
流程： 1.先进行一个初始化 创建出 package.json 才能知道我们安装的包放在哪里 2.然后下载后，构建 注：小程序构建出来的 npm 包 不能用 ESM 语法，只能用 node.js 的 CommonJS 模块语法

```js
//小程序构建出来的npm 包 （miniprogran_npm）不支持 ESM语法，只支持 node.js的CommonJS 模块化语法
const SubEmitter = require("miniprogram-computed");
```

2.自定义构建
默认情况下项目目录的最外层是小程序的根目录，通过 project.config.json 可以指定小程序的根目录

```json
{
  "setting": {
    ...
    "packNpmManually": true,
    "packNpmRelationList": [
      {
        "packageJsonPath": "./package.json",
        "miniprogramNpmDistDir": "./miniprogram"
      }
    ],
    ...
  },
  "libVersion": "2.19.4",
  "miniprogramRoot": "miniprogram/",
  "appid": "wx3eb80995b7e84924",
  "projectname": "mpdemo",
}

```

- `packNpmManually` 启用 npm 构建手动配置
- `packNpmRelationList` 手动构建 npm 配置详情
- `miniprogramRoot` 自定义小程序的根目录

### 自定义组件

##### 1.组件基础

自定义组件的结构与页面是一致的，也包含有 4 个部分

###### 1.1 创建组件

通常组件会放到独立的目录 componts 当中，这个目录需要我们手动进行创建
组件和页面的结构是一致的，但也是有区别的，先简单有个了解：

- 组件的配置文件中配置项 `component: true`
- 组件的 `.js` 文件中调用 `Component` 函数

###### 1.2 注册组件

组件的注册分为页面注册和全局注册两种情况：
页面注册是在使用组件的页面配置中通过 usingComponents 进行注册，只能在当前页面中使用注册的组件

```json
{
  "usingComponents": {
    "authorization": "/components/authorization/index"
  }
}
```

```xml
<!-- pages/index/index.wxml -->
<!-- 双标签用法 -->
<authorization></authorization>
<!-- 单标签用法(一定要闭合) -->
<authorization />

```

全局注册是在 app.json 文件中通过 usingComponents 对自定义组件进行注册，注册的组件可以任意页面中使用全局注册的组件

```json
{
  "pages": [...],
  "window": {...},
  "usingComponents": {
    "authorization": "/components/authorization/index"
  },
  "sitemapLocation": "sitemap.json"
}

```

##### 2 . 组件进阶

###### 2.1 数据与属性

组件的数据由两部分构成：

- `data` 组件本身内部定义的数据
- `properties` 通过组件属性从外部传入组件内部的数据（类似 Vue 的 props）

```javascript
// components/authorization/index
Component({
  // 初始组件内部数据
  data: {
    message: "组件中初始的数据",
  },
  // 定义组件的属性，接收外部传入的数据
  properties: {
    isLogin: {
      type: Boolean,
      value: true,
    },
    tips: String,
  },
});
```

上述代码中 `properties` 中定义了两个属性分别为 `isLogin` 和 `tips`，在应用组件时传入数据

```xml
<authorization is-login="{{false}}" tips="用户未登录"></authorization>

```

注： 应用组件属性名采用 kebab-case 命名法，即 `is-login` 这种形式，而在组件定义 `properties` 时采用的是小驼峰命名法，即 `isLogin`。

this.triggerEvent('myevent) 子组件给父组件传值以及事件

###### 2.2 生命周期和方法

组件也有生命周期函数 需要通过 lifetimes 来定义，主要的生命周期函数有：

- `created` 组件实例刚刚被创建好时，`created` 生命周期被触发，该生命周期中无法调用 `setData`，一般为组件添加一些自定义属性字段。
- `attached` 在组件完全初始化完毕、进入页面节点树后，`attached` 生命周期被触发。

在组件中定义方法与页面也有所不同，组件中的方法必须要定义在 `methods` 属性当中：

```javascript
// components/authorization/index.js
Component({
  data: {
    message: '组件中初始的数据',
  },
  properties: {...},
  // 组件生命周期
  lifetimes: {
    created() {...},
    attached() {
      // 检测用户登录状态
      const isLogin = this.checkLogin();
      // 更新渲染
      this.setData({ isLogin });
    },
  },

  methods: {
    // 假设有个方法用于检测登录
    checkLogin() {
      // 读取本地存储的数据
      return !!wx.getStorageSync('token');
    },
  },
});

```

###### 2.3 组件模块

插槽功能 ：方式与 vue 一致，通过 slot 在组件内部定义插槽位置  
 默认情况小程序在一个组件中只能支持一个插槽，如果需要多个插槽需要启用多 slot 支持 需要在 options 中配置

```javascript
Component({
  options: {
    // 启用多插槽支持
    multipleSlots: true,
  },
  // ...
});
```

也可以使用具名插槽 启用了多插槽支持后通过 name 为插槽命名

```html
<view class="container">
  <slot name="content" wx:if="{{isLogin}}"></slot>
  <text wx:else>{{message}}</text>
</view>
<view class="layout"> ￥<slot name="number"></slot> </view>
```

注： 小程序暂时不支持默认内容 也没有作用域插槽

5.3 Vant 组件
安装 然后注册

```json
{
  //注册
  "usingComponents": {
    "van-button": "@vant/weapp/button/index"
  }
}
```

在使用 Vant 组件时需要将小程序全局配置中的 `style` 去掉：

vant 样式覆盖 我们需要对 vant 原有样式进行修改时有以下方法

1. 简单粗暴，通过调试工具查找要修改样式的盒子，找到已定义的类名，然后强制覆盖原有的样式

   2.通过外部样式类
   Vant 大部分组件都支持 `custom-class` 来指定一个类名，通过这个类名来修改组件根节点的样式，以 `van-cell-group` 为例：

```xml
<van-cell-group custom-class="cell-group">
  <van-cell size="large" title="北京富力家园">
    <text class="tags fail">审核失败</text>
  </van-cell>
  <van-cell title="房间号" value="1号楼1单元101室" border="{{ false }}" />
  <van-cell title="业主" value="内容" border="{{ false }}" />
</van-cell-group>

```

在进行样式覆盖时优先不够的情况下使用 !important

3.使用样式变量
新版本的 css 支持定义变量，其语法样式为: `--变量名: 值`，定义的变量通过 `var` 关键字来使用：

```css
.box {
  --my-cusotm-color: pink;
  backgound-color: var(--my-cusotm-color);
}
```

上述代码中定义的变量只能用在 `.box` 盒子及后代元素上，如果希望整个页面都能使用这个变量，可以这样定义

```css
page {
  --my-cusotm-color: pink;
}

.box {
  backgound-color: var(--my-cusotm-color);
}

.navs {
  backgound-color: var(--my-cusotm-color);
}
```

### 分包加载

小程序包的大小不能超过 2M ，我们可以将小程序拆分成若干个部分叫做分包 1.使用分包
分包从形式上来看就是将某些功能相关的页面及其依赖的资源放到独立的文件夹中，然后在 app.json 文件通过 `subPackages` 配置要加载的分包

## 小程序项目

### git 提交规范

![图片](/applet/10.png)

### vscode 代码提示

下载包 npm i miniprogram-api-typings -D

### 网络请求

小程序绝大部分的 API 都支持 Promise,但也有不支持的，比如 wx.request，开发中需要自行进行一层封装  
安装 wechat-http _// 导入 http 模块_ _import_ http _from_ 'wechat-http'

- `http.baseURL` 配置接口基础路径
- `http.get` 以 `GET` 方法发起请求
- `http.post` 以 `POST` 方法发起请求
- `http.put` 以 `PUT` 方法发起请求
- `http.delete` 以 `DELETE` 方法发起请求
- `http.intercept` 配置请求和响应拦截器
- `http` 本身做为函数调用也能用于发起网络请求

### Object.assign()

```
Object.assign(target, ...sources)
```

target 目标对象，接收源对象属性的对象，也是修改后的返回值。
sources 源对象，包含将被合并的属性

### 小程序拿组件实例

this.selectComoonent() //小程序获取组件实例
![图片](/applet/11.png)

### 获取用户所在经纬度

小程序有两个 API
getLocation 获取用户所在位置的经纬度
chooseLocation 用户指定位置的经纬度
在小程序调用这两个接口时必须在 app.json 中配置

```json
{
  "requiredPrivateInfos": ["getLocation", "chooseLocation"],
  "permission": {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示"
    }
  }
}
```

"1".pandstart(2,'0')

原生小程序下拉刷新

```js
 // 下拉刷新事件
  onPullDownRefresh() {
    console.log('onPullDownRefresh')

    // 开启转圈圈
    wx.utils.showLoading()

    // 发请求，刷新数据

    setTimeout(() => {
      // 结束转圈圈
      wx.utils.hideLoading()

      // 模拟器里会自动收起，不合适，因为刷新请求不确定什么时候能完成
      // 在真机中不会自动收起，会一直显示头部的三个点，需要调用 wx.stopPullDownRefresh() 手动关闭，更合理
      wx.stopPullDownRefresh() // 收起下拉刷新
    }, 500)
  },

  // 上拉触底事件
  // json配置文件中 可以配置 onReachBottomDistance 来控制距离底部多少 px 时就触发
  onReachBottom() {
    console.log('onReachBottom')
    // 这里，就去发加载下一页数据的请求，追加到list中
    // this.data.list.push(res.list)
    // this.setData({ list: this.data.list })
  },
```

![图片](/applet/12.png)

![图片](/applet/13.png)

![图片](/applet/14.png)

### EventChannel 页面间事件通信通道

EventChannel 借助 wx.navigateTo 方法，在两个页面之间构建起了数据通道，互相可以通过“派发事件”及“注册这些事件的监听器”来实现基于事件的页面通信。

```js
wx.navigateTo({
  url: "/repair_pkg/pages/detail/index?repair_id=" + e.mark.repair,
  events: {
    // events: 注册将在目标页面触发（派发）的同名事件的监听器
    // EventChannel 页面间数据传递
    changeStatus: ([id, status]) => {
      const index = this.data.repairList.findIndex((v) => v.id === id);
      this.setData({
        [`repairList[${index}].status`]: status,
      });
    },
  },
});
```

```js
wx.navigateBack();
// 当取消成功后  回跳到详情页面时 触发详情页面的事件  并传递数据给详情页面
// 通过this.getOpenerEventChannel()获取eventChannel对象，触发事件
this.getOpenerEventChannel().emit("changeStatus", [data.id, 0]);
```

# calc()

![图片](/applet/15.png)
