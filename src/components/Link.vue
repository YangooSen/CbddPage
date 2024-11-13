<template>
  <div class="content">
    <el-row class="sidebar-container" type="flex" justify="start">
      <!-- 侧边栏 -->
      <el-col :span="4" class="sidebar">
        <el-menu
          mode="vertical"
          background-color="#666666"
          text-color="white"
          active-text-color="#FF0000"
          :default-active="selectedIndex"
          class="nevigate"
        >
          <el-menu-item index="/link/group">
            <RouterLink to="/link/group">合作课题组</RouterLink>
          </el-menu-item>
        </el-menu>
      </el-col>

      <!-- 主体内容 -->
      <el-col :span="20" class="main-content">
        <RouterView></RouterView>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selectedIndex = ref("/link/group");
</script>
<style scoped></style>
