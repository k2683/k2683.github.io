<template>
  <div>
    <header>
      <h1>{{ currentLang === 'en' ? "Ben's Game Demos and Utilities" : '本厚的游戏演示与工具' }}</h1>
    </header>

    <div class="content">
      <!-- 模块一：QuadTree Detection Demo -->
      <div class="module">
        <h2>{{ currentLang === 'en' ? 'QuadTree Detection Demo' : '四叉树检测演示' }}</h2>
        <router-link 
          :to="{ 
            name: 'pdfViewer', 
            params: { 
              pdfSrc: currentLang === 'en' ? 'QuadTree_Technical_Summary.pdf' : '四叉树技术总结.pdf', 
              title: currentLang === 'en' ? 'QuadTree Technical Summary' : '四叉树技术总结' 
            } 
          }">
          {{ currentLang === 'en' ? 'View QuadTree Technical Summary' : '查看四叉树技术总结' }}
        </router-link>
      </div>

      <!-- 模块二：Desert Interaction Effects Scene -->
      <div class="module">
        <h2>{{ currentLang === 'en' ? 'Desert Interaction Effects Scene' : '沙漠交互特效场景' }}</h2>
        <p>{{ currentLang === 'en' ? 'This scene showcases various effects such as reflective sand, ray marching, and footprint effects.' : '该场景展示了反射沙、射线行进和脚印效果等各种效果。' }}</p>
        <router-link 
          :to="{ 
            name: 'pdfViewer', 
            params: { 
              pdfSrc: currentLang === 'en' ? 'Simulation of Desert Scenes Based on the URP Pipeline.pdf' : '基于URP管线的沙漠场景模拟.pdf', 
              title: currentLang === 'en' ? 'Simulation of Desert Scenes Based on the URP Pipeline' : '基于URP管线的沙漠场景模拟' 
            } 
          }">
          {{ currentLang === 'en' ? 'View Desert Scene Simulation' : '查看沙漠场景模拟' }}
        </router-link>
      </div>

      <!-- 模块三：Dark Allies Game Demo -->
      <div class="module">
        <h2>{{ currentLang === 'en' ? 'Dark Allies Game Demo' : 'Dark Allies 游戏Demo' }}</h2>
        <p>{{ currentLang === 'en' ? 'Dark Allies is a multiplayer game demo with features like saving/loading, weapon switching, etc.' : 'Dark Allies 是一个支持保存/加载、武器切换等功能的多人游戏Demo。' }}</p>
        <router-link 
          :to="{ 
            name: 'pdfViewer', 
            params: { 
              pdfSrc: currentLang === 'en' ? 'Dark_Allies_Technical_Summary.pdf' : 'Dark Allies 技术总结.pdf', 
              title: currentLang === 'en' ? 'Dark Allies Technical Summary' : 'Dark Allies 技术总结' 
            } 
          }">
          {{ currentLang === 'en' ? 'View Dark Allies Technical Summary' : '查看Dark Allies 技术总结' }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLang: 'en', // 默认语言
    };
  },
};
</script>

<style scoped>
.content {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.module {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
}
.module h2 {
  font-size: 1.8em;
  margin-bottom: 10px;
}
</style>
