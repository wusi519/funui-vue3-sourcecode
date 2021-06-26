<demo>支持level</demo>
<template>
  <div >
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
  </div>
</template>

<script lang="ts">
  import Button from '../libs/Button.vue';

  export default {
    components: {
      Button
    }
  };
</script>

