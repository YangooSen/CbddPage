<template>
  <div class="app">
    <el-menu
      mode="horizontal"
      background-color="#666666"
      text-color="white"
      active-text-color="#FF0000"
      :default-active="selectedIndex"
      @select="selected"
      class="nevigate"
    >
      <el-menu-item index="/">
        <RouterLink to="/">CBDD课题组</RouterLink>
      </el-menu-item>

      <el-menu-item index="/home">
        <RouterLink to="/home">网站首页</RouterLink>
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

    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

const selectedIndex = ref("/");
const router = useRouter();

const selected = (index: string, indexPath: object) => {
  console.log("index", index, "indexPath", indexPath);
  // 选中的是link时，默认直接选中group
  if (index == "/link") {
    router.push("/link/group");
  }
};
</script>
<style scoped>
.nevigate {
  display: flex;
  justify-content: space-evenly;
}
</style>
