<template>
  <div>
    <h1>Button 示例</h1>
    <Demo :component="Button1demo"/>
    <Demo :component="Button2demo"/>
    <Demo :component="Button3demo"/>
    <Demo :component="Button4demo"/>
    <Demo :component="Button5demo"/>
  </div>
</template>

<script lang="ts">
  import Demo from '../components/Demo.vue';
  import Button1demo from '../components/Button1demo.vue';
  import Button2demo from '../components/Button2demo.vue';
  import Button3demo from '../components/Button3demo.vue';
  import Button4demo from '../components/Button4demo.vue';
  import Button5demo from '../components/Button5demo.vue';

  export default {
    components: {Demo},
    setup() {
      return {Button1demo, Button2demo, Button3demo, Button4demo, Button5demo};
    }
  };
</script>
