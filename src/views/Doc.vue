<template>
	<div class="funui-layout">
		<Topnav class="nav" :toggleMenuButtonVisible="true"/>
		<div class="funui-content">
			<aside class="funui-aside" v-if="asideVisible">
				<h2>文档</h2>
				<ol>
					<li>
						<router-link to="/doc/intro">介绍</router-link>
					</li>
					<li>
						<router-link to="/doc/install">安装</router-link>
					</li>
					<li>
						<router-link to="/doc/get-started">开始使用</router-link>
					</li>
				</ol>
				<h2>组件列表</h2>
				<ol>
					<li>
						<router-link to="/doc/switch">Switch组件</router-link>
					</li>
					<li>
						<router-link to="/doc/button">Button组件</router-link>
					</li>
					<li>
						<router-link to="/doc/dialog">Dialog组件</router-link>
					</li>
					<li>
						<router-link to="/doc/tabs">Tabs组件</router-link>
					</li>
					<!--       <li>-->
					<!--           <router-link to="/doc/checkbox">CheckBox组件</router-link>-->
					<!--        </li>-->
				</ol>
			</aside>
			<main>
				<router-view/>
			</main>
		</div>
	</div>
</template>
<script lang="ts">
  import Topnav from '../components/Topnav.vue';
  import {inject, Ref} from 'vue';

  export default {
    components: {Topnav},
    setup() {
      const asideVisible = inject<Ref<boolean>>('asideVisible');
      return {asideVisible};
    }

  };
</script>

<style lang="scss" scoped>
	$aside-index: 10;
	.funui-layout {
		display: flex;
		flex-direction: column;
		height: 100vh;
		margin-top: 10px;

		> .nav {
			flex-shrink: 0;
		}

		> .funui-content {
			flex-grow: 1;
			padding-top: 60px;
			padding-left: 156px;
			@media (max-width: 500px) {
				padding-left: 0;
			}
		}
	}

	.funui-content {
		display: flex;
		position: relative;

		> .funui-aside {
			flex-shrink: 0;
			z-index: $aside-index;
		}

		> main {
			flex-grow: 1;
			padding: 16px;
		}

	}

	.funui-aside {
		box-shadow: 2px 0 8px -6px #273849;
		margin-top: 10px;
		background: white;
		width: 150px;
		padding: 70px 0 0 0;
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		font-weight: bold;
		font-size: 1.1em;
		color: #201250;

		> h2 {
			margin-bottom: 4px;
			padding: 6px 16px;
			color: #2f308d;
		}

		> ol {
			> li {
				> a {
					display: block;
					padding: 6px 16px;
					text-decoration: none;
				}

				.router-link-active {
					background: #fff9f9;
					border-right: 3px solid #ffba41;
				}
			}
		}
	}

	main {
		overflow: auto;
	}

</style>