<template>
  <div class="ProgramContent">
    <el-row class="sidebar-container" align="top">
      <!-- 侧边栏 -->
      <el-col :span="3" :offset="1">
        <el-menu
          v-model:default-active="subMenuIndexStore.subMenuIndex"
          mode="vertical"
          class="nevigate"
          active-text-color="#ffd04b"
          background-color="#545c64"
          text-color="#fff"
          @select="selected"
        >
          <el-menu-item index="/program/cheminfo" class="routerlink"
            >化学信息学建模与评估
          </el-menu-item>
          <el-menu-item index="/program/molrelencoding" class="routerlink"
            >分子及关系型数据表征
          </el-menu-item>
          <el-menu-item index="/program/druglikeness" class="routerlink"
            >理化性质及成药性预测
          </el-menu-item>
          <el-menu-item index="/program/targeting" class="routerlink"
            >分子靶标预测
          </el-menu-item>
          <el-menu-item index="/program/sbdc" class="routerlink"
            >FH结构分析及药物筛选
          </el-menu-item>
          <el-menu-item index="/program/drugdesign" class="routerlink"
            >药物筛选及全新设计
          </el-menu-item>
          <el-menu-item index="/program/db" class="routerlink"
            >数据库
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
import { useSubMenuIndex } from "@/stores/subMenuIndex";
import { useRouter } from "vue-router";
const subMenuIndexStore = useSubMenuIndex();

const router = useRouter();
const selected = (index: string, indexPath: object) => {
  // console.log("index", index, "indexPath", indexPath);
  router.push(index);
};
</script>
<style scoped>
.ProgramContent {
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
