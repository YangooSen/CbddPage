<template>
  <div class="content">
    <span class="underline"> 获得奖励，人才称号及学术荣誉情况 </span>
    <div>
      <ul>
        <!-- 遍历data数组，显示每一项 -->
        <li class="text" v-for="item in achievement" :key="item.id">
          {{ item.content }}
        </li>
      </ul>
    </div>
    <span class="underline"> 指导学生获奖情况 </span>
    <div>
      <ul>
        <!-- 遍历data数组，显示每一项 -->
        <li class="text" v-for="item in instruct" :key="item.id">
          {{ item.content }}
        </li>
      </ul>
    </div>
    <span class="underline"> 国内外学术组织任职情况 </span>
    <div>
      <ul>
        <!-- 遍历data数组，显示每一项 -->
        <li class="text" v-for="item in position" :key="item.id">
          {{ item.content }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAllAchievement, type achievement } from "@/api/achievement";
import { getAllInstruct, type instruct } from "@/api/instruct";
import { getAllPosition, type position } from "@/api/position";
import { onMounted, ref } from "vue";

const achievement = ref<achievement[]>([]);
const position = ref<position[]>([]);
const instruct = ref<instruct[]>([]);

getAllAchievement().then((res) => {
  achievement.value = res.data.data;
  //   console.log(res);
});
getAllInstruct().then((res) => {
  instruct.value = res.data.data;
  //   console.log(res);
});
getAllPosition().then((res) => {
  position.value = res.data.data;
  //   console.log(res);
});

onMounted(getAllAchievement);
onMounted(getAllInstruct);
onMounted(getAllPosition);
</script>
<style scoped>
.underline {
  font-size: 30px;
  text-decoration: underline;
  font-weight: bold;
}
.text {
  font-size: 25px;
}
</style>
