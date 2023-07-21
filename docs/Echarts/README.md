---
sidebar: auto
---

# echarts

## echarts 饼状图

```js
//配置
option: {
        title: {
          text: "1111\n总设备数量", //控制中间文字
          left: "center", //控制中间文字位置
          top: "center",
          textStyle: {
            fontSize: 16 //字体大小
          }
        },
        startAngle: b.value[i], //起始角度
        tooltip: {
          trigger: "item"
        },
        // legend: {
        //   top: "5%",
        //   left: "-60px"
        // },
         //修改hover后的样式
        tooltip: {
            trigger: 'item',
      backgroundColor: 'rgba(0, 0, 0, 0.5);',  // 提示框的背景颜色
      borderColor: 'rgba(0, 0, 0, 0.5);',  // 提示框边框颜色
      borderWidth: 0,  // 提示框边框宽度
      textStyle: {  // 提示框文字样式
        color: '#fff',
        fontSize: 14,
        fontWeight: 400
      },
             position: function (point, params, dom, rect, size) {
        // 提示框的位置在右边x
        return [point[0] + 10, point[1] - size.contentSize[1] / 2];
      },
                formatter: function (params) {
                    let name = [totalData.value[i].name]
                    if (params.name === "") {
                        params.name = name
                        params.value = 0
                    }
                    let tooltipContent = '<div style="text-align: center; font-weight: bold;">状态统计</div>';
                    tooltipContent += '<div style="margin-top: 8px;">' + params.name + '设备 : ' + params.value + '</div>';
                    return tooltipContent
                }
            }
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["60%", "80%"], //控制大小
            center: ["50%", "50%"], //控制上下左右位置
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            // emphasis: {
            //   label: {
            //     // show: true,
            //     fontSize: 18,
            //     fontWeight: "bold"
            //   }
            // },
            labelLine: {
              show: false
            },
            data: [
              { value: 20, name: "待修设备", itemStyle: { color: "#FCCA27" } },
              { value: 30, name: "空闲设备", itemStyle: { color: "#FF6E17" } },
              { value: 30, name: "在用设备", itemStyle: { color: "#DC0B14" } },
              { value: 20, name: "在修设备", itemStyle: { color: "#FFC1C3" } }
            ]
          }
        ]
      }
```

```js
// 基于准备好的dom，初始化echarts实
const pieChart = this.$echarts.init(this.$refs.pie);
pieChart.setOption(this.option);
//让图形 做自适应宽度
window.addEventListener("resize", function () {
  pieChart.resize();
});
```

## echarts 做自适应宽度 👆

## echarts 饼图循环

循环后从后台拿不到数据 如果渲染不上去 需用定时器等待 因为请求数据是异步的

```html
<div class="statistics">
  <card class="statistics-top">
    <div ref="totalRef" class="total-chart"></div>
    <div
      v-for="i of totalData"
      :key="i"
      class="device-chart"
      @click="wc(i.name)"
    ></div>
  </card>
</div>
```

```js
// 基于准备好的dom，初始化echarts实例
const deviceCharts = document.getElementsByClassName("device-chart");
for (let i = 0; i < deviceCharts.length; i++) {
  const myChart = echarts.init(deviceCharts[i]);
  const option = {
    title: {
      text: `${totalData.value[i].value}\n${totalData.value[i].name}数量`,
      left: "center",
      top: "center",
      textStyle: {
        fontSize: 16,
      },
    },
    color: [color[i], "#DCDFE6"],
    tooltip: {
      trigger: "item",
    },
    // legend: {
    //     top: '5%',
    //     left: '-30px'
    // },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["50%", "75%"],
        startAngle: b.value[i], //起始角度
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            // show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { ...totalData.value[i] },
          { value: totalData.value[i].totalCount - totalData.value[i].value },
        ],
      },
    ],
  };
  option && myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}
```

## echarts 柱状图 轴字长度超

```js
formatter: function(params) {
  console.log(params.name.length)
  // 判断 name 字符串长度是否超过 4，超过则添加换行
  if (params.name.length > 4) {
    console.log(params.name.substring(4))
    return (
      params.name.substring(0, 4) +"\n" +params.name.substring(4)
    );
  } else {
    return params.name;
  }
}
```

![图片](/echarts/one.png)

## echarts 柱状图 数据太长

```js
const total = totalPurchasePrice.map((item) => {
  if (item > ((maxValue - 0) / 5) * 4) {
    return {
      value: item,
      label: { show: true, position: "insideRight" },
    };
  } else {
    return {
      value: item,
      label: { show: true, position: "right" },
    };
  }
});
```

![图片](/echarts/3.png)

## echarts 柱状图 滚动条

```js
dataZoom: [{
      type: 'slider',
      show: totalPurchasePrice.length > 9 ? true : false,//显示滚动条
      zoomLock: true,//锁定滚动条缩放，（固定滚动条长度）
      xAxisIndex: 0,
      // left: '5%',//离左边的百分比距离
      bottom: 5,
      borderColor: "#f3f3f3",//边框和背景颜色一致，（因为无法做到无边框，只能跟随页面背景）
      height: 3,//滚动条高度
      handleSize: 10, // 设置滑块的大小
      showDetail: false,//关闭：拖拽时候显示详细数值信息。
      fillerColor: '#f3f3f3',//滚动条颜色
      handleSize: '92%',//矢量尺寸占比
      handleStyle: {
        borderWidth: 0,
        color: '#f3f3f3'
      },
      //SVG图形填充颜色
      handleIcon: "path://M512,512m-448,0a448,448,0,1,0,896,0a448,448,0,1,0,-896,0Z",//直接画一个圆形SVG矢量路径
      start: 0,//初始化滚动条开始位置
      // end: totalPurchasePrice.length > 3 ? 90 : 100, //初始化滚动条结束位置
      showDataShadow: false, //屏蔽折线图，true为显示折线图
      startValue: 0, // 从头开始。
      endValue: 8,  // 最多六个
      minValueSpan: 8,  // 放大到最少几个
      maxValueSpan: 8,  //  缩小到最多几个
    }],
```

## 树形下拉菜单

```js
export default {
  data() {
    return {
      exname: "",
      huixianarr: [], //用于回显选中的数据
      ids: "", //后台需要的参数id
      options: [
        {
          name: "一级分类",
          id: "0",
          children: [
            {
              id: "1",
              name: "二级分类1",
              code: "U05000000",
              content: null,
              level: 1,
              type: null,
              parentId: null,
              img: null,
              children: [
                {
                  id: "10",
                  name: "三级分类",
                  code: "CSYWDY05",
                  content: null,
                  level: 1,
                  type: null,
                  parentId: "1",
                  img: null,
                  children: null,
                },
                {
                  id: "11",
                  name: "三级分类1",
                  code: "U05000003",
                  content: null,
                  level: 1,
                  type: null,
                  parentId: "1",
                  img: null,
                  children: null,
                },
                {
                  id: "13",
                  name: "三级分类2",
                  code: "U05000008",
                  content: null,
                  level: 1,
                  type: null,
                  parentId: "1",
                  img: null,
                  children: null,
                },
              ],
            },
            {
              id: "12",
              name: "二级分类2",
              code: "QXPGYWDY",
              content: null,
              level: 1,
              type: null,
              parentId: "7",
              img: null,
              children: null,
            },
          ],
        },
        {
          name: "一级分类",
          id: "2",
          children: [
            {
              id: "1",
              name: "二级分类1",
              code: "U05000000",
              content: null,
              level: 1,
              type: null,
              parentId: null,
              img: null,
              children: [
                {
                  id: "10",
                  name: "三级分类",
                  code: "CSYWDY05",
                  content: null,
                  level: 1,
                  type: null,
                  parentId: "1",
                  img: null,
                  children: null,
                },
                {
                  id: "11",
                  name: "三级分类1",
                  code: "U05000003",
                  content: null,
                  level: 1,
                  type: null,
                  parentId: "1",
                  img: null,
                  children: null,
                },
                {
                  id: "13",
                  name: "三级分类2",
                  code: "U05000008",
                  content: null,
                  level: 1,
                  type: null,
                  parentId: "1",
                  img: null,
                  children: null,
                },
              ],
            },
            {
              id: "12",
              name: "二级分类2",
              code: "QXPGYWDY",
              content: null,
              level: 1,
              type: null,
              parentId: "7",
              img: null,
              children: null,
            },
          ],
        },
        {
          name: "一级分类",
          id: "3",
          children: [
            {
              id: "1",
              name: "二级分类1",
              code: "U05000000",
              content: null,
              level: 1,
              type: null,
              parentId: null,
              img: null,
              children: [
                {
                  id: "10",
                  name: "三级分类",
                  code: "CSYWDY05",
                  content: null,
                  level: 1,
                  type: null,
                  parentId: "1",
                  img: null,
                  children: null,
                },
                {
                  id: "11",
                  name: "三级分类1",
                  code: "U05000003",
                  content: null,
                  level: 1,
                  type: null,
                  parentId: "1",
                  img: null,
                  children: null,
                },
                {
                  id: "13",
                  name: "三级分类2",
                  code: "U05000008",
                  content: null,
                  level: 1,
                  type: null,
                  parentId: "1",
                  img: null,
                  children: null,
                },
              ],
            },
            {
              id: "12",
              name: "二级分类2",
              code: "QXPGYWDY",
              content: null,
              level: 1,
              type: null,
              parentId: "7",
              img: null,
              children: null,
            },
          ],
        },
      ], //树状结构数据
      defaultProps: {
        children: "children",
        label: "name",
      },
      hxlist: [],
    };
  },
  created() {
    // //获取到回显数据
    // this.$nextTick(() => {
    //   this.$refs.treeForm.setCheckedKeys([]);
    //   this.huixianarr = [1, 10, 7];
    //   this.huixianarr.forEach(index => {
    //     this.setname(this.options[0], index);
    //   });
    //   this.exname = this.hxlist.join(",");
    // });
  },
  methods: {
    // 节点点击事件
    handleNodeClick(data, lst) {
      let arr = [],
        name = [];
      lst.checkedNodes.forEach((item) => {
        //过滤拿到选中的id
        arr.push(item.id);
      });
      lst.checkedNodes.forEach((item) => {
        //过滤拿到选中的name
        name.push(item.name);
      });
      this.exname = name.join(","); //显示内容
      this.ids = arr.join(","); //后台传参需要的id
    },
    // 选择器配置可以清空选项，用户点击清空按钮触发
    handleClear() {
      this.ids = "";
    },
    //递归查树
    setname(list, ids) {
      list.children.forEach((item) => {
        if (item.id == ids) {
          this.hxlist.push(item.name);
        } else {
          if (item.children != null) {
            this.setname(item, ids);
          }
        }
      });
    },
  },
};
```

## flex 布局 gap 属性

调整弹性盒子之间的间距

## app 的返回方法

![图片](/echarts/two.png)

<!-- ![image-20230705163801941](/echarts/two.png/) -->

## 自定义指令

```js
//index.js  统一导出
import * as directives from "./directives";
import Vue from "vue";

export default function directivesAll() {
  for (const [k, v] of Object.entries(directives)) {
    Vue.directive(k, v);
  }
}

//main.js
import directivesAll from "@/directives";
directivesAll();

//组件使用
v-imgError='defaultImg'
defaultImg:require('@/assets/defaultImg.png'),
```

### 1.图片路径错误 给默认图片

```js
export const imgError = {
  inserted(dom, option) {
    //当图片加载失败时 ，会触发 onerror 事件
    dom.onerror = () => {
      dom.src = option.value;
    };
  },
};
```

### 2.按钮节流 搜索按钮

```js
export const searchFor = {
  inserted(el, binding) {
    el.addEventListener("click", () => {
      if (el.style["pointer-events"] != "none") {
        el.style["pointer-events"] = "none";
        setTimeout(() => {
          el.style["pointer-events"] = "all";
        }, binding.value || 1500);
      }
    });
  },
};

v-searchFor="3000"  //使用
```

## 打包 cdn

npm install webpack-bundle-analyzer --save-dev
"analyzer": "set analyzer=true && vue-cli-service build ",
npm run analyzer

```js
/ 通过环境变量 来区分是否使用cdn
const isProd = process.env.NODE_ENV === "production"; // 判断是否是生产环境
let externals = {};
if (isProd) {
  // 如果是生产环境 就排除打包 否则不排除
  externals = {
    // key(包名) / value(这个值 是 需要在CDN中获取js, 相当于 获取的js中 的该包的全局的对象的名字)
    vue: "Vue", // 后面的名字不能随便起 应该是 js中的全局对象名
    "element-ui": "ELEMENT", // 都是js中全局定义的
    echarts: "echarts",
  };
  cdn = {
    css: [
      "https://unpkg.com/element-ui/lib/theme-chalk/index.css", // 提前引入elementUI样式
      "https://cdn.bootcss.com/echarts/3.7.0/echarts.min.js",
    ], // 放置css文件目录
    js: [
      "https://unpkg.com/vue/dist/vue.js", // vuejs
      "https://unpkg.com/element-ui/lib/index.js", // element
    ], // 放置js文件目录
  };
}

configureWebpack: {
    externals,
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "设备管理";
      return args;
    });
    config.plugin("html").tap((args) => {
      args[0].cdn = cdn;
      return args;
    });
    if (process.env.analyzer) {
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    }
  },
```
