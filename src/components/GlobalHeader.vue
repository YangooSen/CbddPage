<template>
  <el-menu
    class="UpHeader"
    mode="horizontal"
    :default-active="globalIndex ? globalIndex : ''"
    @select="selected"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="/" class="UpRouterlink"> CBDD课题组 </el-menu-item>

    <el-menu-item index="/home" class="UpRouterlink"> 网站首页 </el-menu-item>

    <el-menu-item index="/research" class="UpRouterlink">
      研究方向
    </el-menu-item>

    <el-menu-item index="/people" class="UpRouterlink">人员组成 </el-menu-item>

    <el-menu-item index="/publication" class="UpRouterlink"
      >论文专利
    </el-menu-item>

    <el-menu-item index="/program" class="UpRouterlink">程序开发 </el-menu-item>

    <el-menu-item index="/gallery" class="UpRouterlink">照片展示 </el-menu-item>

    <el-menu-item index="/link" class="UpRouterlink">友情链接 </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useSubMenuIndex } from "@/stores/subMenuIndex";
const router = useRouter();

const globalIndex = ref("");

const subMenuIndexStore = useSubMenuIndex();

router.afterEach((to, from, failure) => {
  const parts = to.path.split("/");
  globalIndex.value = "/" + parts[1];
  console.log(globalIndex.value);
  subMenuIndexStore.setSubMenuIndex(to.path);
  // console.log(subMenuIndexStore.subMenuIndex);
});

const selected = (index: string, indexPath: object) => {
  // console.log("index", index, "indexPath", indexPath);
  // 选中的是link时，默认直接选中group
  if (index == "/link") {
    router.push("/link/group");
  } else if (index == "/gallery") {
    router.push("/gallery");
  } else if (index == "/research") {
    router.push("/research/aidd");
  } else if (index == "/people") {
    router.push("/people/mentor");
  } else if (index == "/publication") {
    router.push("/publication/paper");
  } else if (index == "/program") {
    router.push("/program/cheminfo");
  } else if (index == "/" || index == "/home") {
    router.push("/home");
  }
};
</script>
<style scoped>
.UpHeader {
  height: 60px;
  display: flex;
  justify-content: space-evenly;
}
.UpRouterlink {
  font-size: 20px;
}
</style>
