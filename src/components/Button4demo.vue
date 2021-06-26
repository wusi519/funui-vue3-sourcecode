<demo>支持disabled</demo>
<template>
  <div>
    <Button disabled>禁用的按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用文本按钮</Button>
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

