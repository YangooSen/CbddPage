<template>
  <div class="app">
    <div class="nevigate">
      <el-menu
        mode="horizontal"
        background-color="black"
        text-color="white"
        :default-active="selectedIndex"
        @select="selected"
      >
        <el-menu-item index="/">
          <RouterLink to="/">CBDD课题组</RouterLink>
        </el-menu-item>

        <el-menu-item index="/home">
          <RouterLink to="/home">首页</RouterLink>
        </el-menu-item>

        <el-menu-item index="/research">
          <RouterLink to="/research">研究方向</RouterLink>
        </el-menu-item>

        <el-menu-item index="/people">
          <RouterLink to="/people">人员组成</RouterLink>
        </el-menu-item>

        <el-menu-item index="/publication">
          <RouterLink to="/publication">论文专利</RouterLink>
        </el-menu-item>

        <el-menu-item index="/program">
          <RouterLink to="/program">程序开发</RouterLink>
        </el-menu-item>

        <el-menu-item index="/gallery">
          <RouterLink to="/gallery">照片展示</RouterLink>
        </el-menu-item>

        <el-menu-item index="/link">
          <RouterLink to="/link">友情链接</RouterLink>
        </el-menu-item>
      </el-menu>
    </div>

    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const selectedIndex = ref("/");

const selected = (index: number, indexPath: string) => {
  console.log("index", index, "indexPath", indexPath);
};
</script>
<style scoped>
.nevigate {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
