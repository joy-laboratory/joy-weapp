<template>
  <page>
    <ga-panel moduleName='介绍'>
      <Markdown />
    </ga-panel>
  </page>
</template>

<script>
  import page from '@/components/page.vue'
  import Markdown from '@/markdown/introduction.md'
  export default {
    name: "introduction",
    components: {
      Markdown,
      page
    }
  }
</script>

<style lang="less">

</style>
