<template>
  <div>Tabs 示例</div>
  <Demo :component="Tabs1demo"/>

</template>

<script lang="ts">
  import Demo from '../components/Demo.vue';
  import Tabs1demo from '../components/Tabs1demo.vue';

  export default {
    components: {
      Demo
    },
    setup() {

      return {Tabs1demo};
    }
  };
</script>
