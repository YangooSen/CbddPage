<template>
  <div class="content">
    <table border="1">
      <thead>
        <tr>
          <th>软件/平台</th>
          <th>解决的科学问题</th>
          <th>功能及访问量</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in dataList" :key="data.id">
          <td>{{ data.platform }}</td>
          <td>{{ data.problem }}</td>
          <td>{{ data.function }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { getPlatformByCategory, type platform } from "@/api/platform";
import { onMounted, ref } from "vue";

const dataList = ref<platform[]>([]);

getPlatformByCategory("druglikeness").then((res) => {
  dataList.value = res.data;
  console.log(res);
});

onMounted(getPlatformByCategory);
</script>
<style scoped>
.content {
  font-size: 25px;
}
</style>
