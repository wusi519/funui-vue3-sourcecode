<demo>
  一键打开 Dialog
</demo>
<template>
  <div>
    <Button @click="showDialog">toggle</Button>
  </div>
</template>

<script lang="ts">
  import Button from '../libs/Button.vue'
  import {
      h
  } from 'vue'
  import {
    openDialog
  } from '../libs/openDialog'
  export default {
    components: {
      Button
    },
    setup() {
      const showDialog = () => {
        openDialog({
          title: h('strong', {}, '标题'),
          content: '你好',
          closeOnClickOverlay:false,
          ok() {
            console.log('ok')
          },
          cancel() {
            console.log('cancel')
          }
        })
      }
      return {
        showDialog
      }
    }
  }
</script>
