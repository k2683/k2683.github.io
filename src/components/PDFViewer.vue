<!-- src/components/PDFViewer.vue -->
<template>
  <div>
    <h2>{{ title }}</h2>
    <iframe :src="pdfSrc" width="100%" height="800px"></iframe>
    <router-link to="/">{{ currentLang === 'en' ? 'Back to Home' : '返回首页' }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    pdfSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      currentLang: 'en', // 如果你需要语言切换
    };
  },
};
</script>

<style scoped>
iframe {
  border: none;
  margin-bottom: 20px;
}
</style>
