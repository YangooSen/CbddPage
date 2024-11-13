<template>
  <img :src="imageUrl" alt="暂未加载" class="robotImg" />
  <div class="description">
    计算生物学和药物设计实验室（智能药物创新研究与转化中心）致力于运用和发展一些新的概念，算法和软件在海量数据中快速的筛选具有生物活性的先导化合物，以及对复杂疾病系统实现快速的诊断和评估。药物分子设计过程涉及到多种科学原理的运用，而且需要严密的跨学科交叉研究的思维方式。我们运用了各种人工智能技术、机器学习方法、化学信息学以及生物信息学技术来实现自动的问题假设生成，活性预测和实验验证研究。针对药物研发中的三个关键技术瓶颈问题（生物活性分子的发现、成药性和安全性预测、及选择性和脱靶效应评估），聚焦基于结构/配体的虚拟筛选方法、成药性理论预测和分子靶标识别展开了系统和深入的方法学研究，并把发展的方法与实验平台无缝衔接用于多个重要靶点的药物分子设计和生物活性分子的作用靶标识别，旨在开发出具有全新结构的抗肿瘤先导化合物并揭示了多种生物活性分子（如中药及复方）的新机制。
  </div>
  <br />
  <div class="goal">
    本课题组主要开展以下四方面研究工作：
    <ol>
      <li>新型人工智能算法及机器学习算法在药物发现研究中的发展和应用</li>
      <li>基于人工智能技术和系统药理学的中药复方作用机制研究</li>
      <li>
        基于知识图谱和人工智能技术的疾病靶标识别、药物新机制及合理安全用药研究
      </li>
      <li>药物发现过程中软件工具、Web服务及数据库的发展</li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import imageUrl from "@/assets/img/HomeRobot.jpg";
</script>
<style scoped>
.description {
  font-size: 20px;
}
.goal {
  font-size: 20px;
}
.robotImg {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
