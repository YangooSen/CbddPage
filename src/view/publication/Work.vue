<template>
  <div>
    <ul>
      <!-- 遍历data数组，显示每一项 -->
      <li class="text" v-for="item in data" :key="item.id">
        {{ item.content }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { getAllSoftware, type software } from "@/api/software";
import { onMounted, ref } from "vue";

const data = ref<software[]>([]);

getAllSoftware().then((res) => {
  data.value = res.data.data;
  //   console.log(res);
});

onMounted(getAllSoftware);
</script>
<style scoped>
.text {
  font-size: 25px;
}
</style>
