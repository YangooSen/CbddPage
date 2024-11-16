<template>
  <div class="PublicationContent">
    <el-row class="sidebar-container" align="top">
      <!-- 侧边栏 -->
      <el-col :span="3" :offset="1">
        <el-menu
          mode="vertical"
          class="nevigate"
          active-text-color="#ffd04b"
          background-color="#545c64"
          text-color="#fff"
          @select="selected"
        >
          >
          <el-menu-item index="/publication/paper" class="routerlink">
            论文成果
          </el-menu-item>
          <el-menu-item index="/publication/patent" class="routerlink">
            专利成果
          </el-menu-item>
          <el-menu-item index="/publication/work" class="routerlink">
            软件/著作
          </el-menu-item>
        </el-menu>
      </el-col>

      <!-- 主体内容 -->
      <el-col :span="15" :offset="3">
        <RouterView></RouterView>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const selected = (index: string, indexPath: object) => {
  console.log("index", index, "indexPath", indexPath);
  router.push(index);
};
</script>
<style scoped>
.PublicationContent {
  margin-top: 50px;
}
.routerlink {
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.nevigate {
  position: fixed;
  border-radius: 15px; /* 设置菜单整体的圆角 */
  overflow: hidden; /* 避免圆角影响子元素 */
}
</style>
