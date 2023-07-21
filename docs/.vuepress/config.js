import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
// import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
export default defineUserConfig({
  base: "/lss-blog/",
  lang: "zh-CN",
  title: "LSS个人私藏笔记",
  description: "记录笔记",
  head: [
    ["link", { rel: "icon", href: "/img/Sowhat.png" }],
    ["meat", { name: "author", content: "奋苦三年珍藏" }],
    ["meat", { name: "keywords", content: "早日暴富" }],
    [
      "script",
      {
        language: "javascript",
        type: "text/javascript",
        src: "/lss-blog/js/YH.js",
      },
    ],
    [
      "script",
      {
        language: "javascript",
        type: "text/javascript",
        src: "/lss-blog/js/XX.js",
      },
    ],
  ],
  theme: defaultTheme({
    lastUpdated: "更新时间",
    logo: "/img/Sowhat.png",
    // 默认主题配置
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      { text: "JS", link: "/JS/" },
      { text: "Echarts", link: "/Echarts/" },
      { text: "Applet", link: "/applet/" },
    ],
  }),
  plugins: [
    searchPlugin({
      // 配置项
    }),
    ["go-top"],
    // 悬挂小猫返回顶部
  ],
});
