<template>
  <el-container class="container">
    <el-header class="header">
      <GlobalHeader />
    </el-header>
    <el-main class="main"> <RouterView></RouterView> </el-main>
    <el-footer
      style="
        background-color: #b3c0d1;
        height: 40px;
        line-height: 40px;
        text-align: center;
      "
    >
      Copyright © xxx-xxx 曹东升课题组版权所有 | 主页总点击量：xxx 次 |
      <span @click="login" class="link-text"> 管理者模式 </span> |
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import GlobalHeader from "@/components/GlobalHeader.vue";
const router = useRouter();
const login = () => {
  router.push("/login");
};
</script>
<style scoped>
.container {
  margin: 0;
  padding: 0;
  height: 100%;
}
.link-text {
  color: blue;
  cursor: pointer;
}
.header {
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #545c64;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
</style>
