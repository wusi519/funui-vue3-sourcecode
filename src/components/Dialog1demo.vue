<demo>常规使用</demo>
<template>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x"
          :ok="f1" :cancel="f2">
    <template v-slot:content>
      <div>hello</div>
      <div>hi</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
</template>
<script lang="ts">
  import Dialog from '../libs/Dialog.vue';
  import Button from '../libs/Button.vue';
  import {ref} from 'vue';
  export default {
    components: {
      Button,
      Dialog
    },
    setup() {
      const x = ref(false);
      const toggle = () => {
        x.value = !x.value;
      };
      const f1 = () => {
        return false;
      };
      const f2 = () => {};
      return {x, toggle, f1, f2};
    }
  };
</script>

