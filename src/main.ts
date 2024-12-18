import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/assets/main.css";
import App from "./App.vue";
import router from "./router";
import zhCn from "element-plus/es/locale/lang/zh-cn";

import ElementPlus from "element-plus"; //导入 ElementPlus 组件库的所有模块和功能
import "element-plus/dist/index.css"; //导入 ElementPlus 组件库所需的全局 CSS 样式
import * as ElementPlusIconsVue from "@element-plus/icons-vue"; //导入 ElementPlus 组件库中的所有图标
const app = createApp(App);
//注册 ElementPlus 组件库中的所有图标到全局 Vue 应用中
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(ElementPlus, { locale: zhCn }); // 使用语言包
app.use(createPinia());
app.use(router);
app.use(ElementPlus); //将 ElementPlus 插件注册到 Vue 应用中
app.mount("#app");
