<template>
  <h1>Dialog 示例</h1>
  <Demo :component="Dialog1demo"/>
  <Demo :component="Dialog2demo"/>
  <Demo :component="Dialog3demo"/>
</template>

<script lang="ts">
  import Demo from '../components/Demo.vue';
  import Dialog1demo from '../components/Dialog1demo.vue';
  import Dialog2demo from '../components/Dialog2demo.vue';
  import Dialog3demo from '../components/Dialog3demo.vue';

  export default {
    components: {
      Demo
    },
    setup() {
      return {Dialog1demo, Dialog2demo, Dialog3demo};
    }
  };
</script>

<style lang="scss" scoped>

</style>