<template>
  <div class="HomeContent">
    <div class="description">
      <div class="PaperSlideImg">
        <el-carousel :height="'50vh'">
          <el-carousel-item v-for="item in figs" :key="item.index">
            <img :src="item.file" alt="无法加载" class="carouselImg" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="SimpleText">
        <h1>基于人工智能系统的计算机辅助药物发现和疾病诊断研究</h1>
        <p>
          计算生物学和药物设计实验室（智能药物创新研究与转化中心）致力于运用和发展一些新的概念，算法和软件在海量数据中快速的筛选具有生物活性的先导化合物，以及对复杂疾病系统实现快速的诊断和评估。药物分子设计过程涉及到多种科学原理的运用，而且需要严密的跨学科交叉研究的思维方式。我们运用了各种人工智能技术、机器学习方法、化学信息学以及生物信息学技术来实现自动的问题假设生成，活性预测和实验验证研究。针对药物研发中的三个关键技术瓶颈问题（生物活性分子的发现、成药性和安全性预测、及选择性和脱靶效应评估），聚焦基于结构/配体的虚拟筛选方法、成药性理论预测和分子靶标识别展开了系统和深入的方法学研究，并把发展的方法与实验平台无缝衔接用于多个重要靶点的药物分子设计和生物活性分子的作用靶标识别，旨在开发出具有全新结构的抗肿瘤先导化合物并揭示了多种生物活性分子（如中药及复方）的新机制。
        </p>
      </div>
    </div>
    <div class="goal">
      <span class="underline"
        >本课题组主要开展以下四方面研究工作（右边有点空）：</span
      >
      <ol>
        <li>
          <span class="link-text" @click="aidd"> 人工智能药物设计 </span>
        </li>
        <li>
          <span class="link-text" @click="bioinfo"> 化学/生物信息学 </span>
        </li>
        <li>
          <span class="link-text" @click="drugdev"> 新药/中药开发 </span>
        </li>
        <li>
          <span class="link-text" @click="rsum"> 合理安全用药 </span>
        </li>
      </ol>
    </div>

    <div class="admissions">
      <span class="underline"> 加入我们 </span>
      <p>热烈欢迎对上述研究方向感兴趣的同学加入曹东升教授课题组</p>
      <span class="underline"> 联系方式 </span>
      <p>联系人：曹东升</p>
      <p>地址：中南大学湘雅药学院</p>
      <p>邮箱：oriental-cds@163.com</p>
    </div>
    <span
      class="underline"
      style="display: block; font-size: 30px; margin-left: 3%"
    >
      更多（下面的二维码图片重新找，会过期）
    </span>
    <div class="more">
      <div class="account">
        <img
          src="@/assets/img/accountlogo.png"
          alt="暂未加载"
          style="width: 200px; height: 200px"
        />
        <img
          src="@/assets/img/account.png"
          alt="暂未加载"
          style="width: 200px; height: 200px"
        />
      </div>
      <div class="AccountSimpleContent">
        <p>
          关注药物研发相关领域，人工智能药物设计，计算机辅助药物设计，化学信息学，计算化学，生物信息学，
          系统生物学，网络药理学，药物发现和药物设计等，分享专业文献阅读；促进科研交流，开拓学术视野，
          激发创新思维
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const modules = import.meta.glob("@/assets/img/paper_slide/*");
const files = Object.keys(modules);
let i: number = 0;
const figs = files.map((item) => {
  i += 1;
  return {
    index: i,
    file: item,
  };
});
// console.log(figs);

const router = useRouter();

const aidd = () => {
  router.push("/research/aidd");
};
const bioinfo = () => {
  router.push("/research/bioinfo");
};
const drugdev = () => {
  router.push("/research/drugdev");
};
const rsum = () => {
  router.push("/research/rsum");
};
</script>
<style scoped>
.HomeContent {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
}
.PaperSlideImg {
  flex: 1;
  margin-left: 3%;
  margin-right: 3%;
  border: 1px solid gray;
  padding: 10px;
  border-radius: 5px;
}
.carouselImg {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.more {
  margin-left: 3%;
  flex: 3;
  display: flex;
}
.AccountSimpleContent {
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 5;
  font-size: 40px;
}
.account {
  margin-top: 2%;
  margin-right: 2%;
  display: flex;
  justify-content: space-evenly;
  flex: 1;
}
.admissions {
  flex: 3;
  margin-left: 3%;
  font-size: 30px;
}
.description {
  display: flex;
  flex: 1;
}
.goal {
  flex: 3;
  margin-left: 3%;
  margin-top: 5%;
  font-size: 30px;
}

.SimpleText {
  flex: 2;
  margin-right: 3%;
  text-indent: 2ch;
}
.underline {
  text-decoration: underline;
  font-weight: bold;
}
.link-text {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}

.link-text:hover {
  color: darkblue;
}
p {
  text-indent: 2ch;
  font-size: 25px;
}
</style>
