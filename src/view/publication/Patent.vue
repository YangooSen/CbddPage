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
import { getAllPatent, type patent } from "@/api/patent";
import { onMounted, ref } from "vue";

const data = ref<patent[]>([]);

getAllPatent().then((res) => {
  data.value = res.data.data;
  //   console.log(res);
});

onMounted(getAllPatent);
</script>
<style scoped>
.text {
  font-size: 25px;
}
</style>
