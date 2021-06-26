<template>
	<div>
		<h1>CheckBox示例</h1>
		<Demo :component="CheckBoxdemo"/>
	</div>
</template>

<script lang="ts">
  import Demo from '../components/Demo.vue';
  import CheckBoxdemo from '../components/CheckBoxdemo.vue';

  export default {
    name: 'CheckBox',
    components: {Demo,CheckBoxdemo}
  };
</script>

<style lang="scss" scoped>

</style>