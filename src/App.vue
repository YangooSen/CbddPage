<template>
  <div class="app">
    <el-menu
      mode="horizontal"
      :default-active="selectedIndex"
      @select="selected"
      class="nevigate"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/" class="routerlink"> CBDD课题组 </el-menu-item>

      <el-menu-item index="/home" class="routerlink"> 网站首页 </el-menu-item>

      <el-menu-item index="/research" class="routerlink">
        研究方向
      </el-menu-item>

      <el-menu-item index="/people" class="routerlink">人员组成 </el-menu-item>

      <el-menu-item index="/publication" class="routerlink"
        >论文专利
      </el-menu-item>

      <el-menu-item index="/program" class="routerlink">程序开发 </el-menu-item>

      <el-menu-item index="/gallery" class="routerlink">照片展示 </el-menu-item>

      <el-menu-item index="/link" class="routerlink">友情链接 </el-menu-item>
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
  } else if (index == "/research") {
    router.push("/research/aidd");
  } else if (index == "/people") {
    router.push("/people/mentor");
  } else if (index == "/publication") {
    router.push("/publication/paper");
  } else if (index == "/program") {
    router.push("/program");
  } else if (index == "/" || index == "/home") {
    router.push("/home");
  }
};
</script>
<style scoped>
.nevigate {
  display: flex;
  justify-content: space-evenly;
}
.routerlink {
  font-size: 20px;
}
</style>
