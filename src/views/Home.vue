<template>
	<div class="funui-TopnavAndBanner">
		<Topnav/>
		<div class="funui-banner">
			<h1>FunUI</h1>
			<h2>一个厉害的UI框架</h2>
			<p class="actions">
				<a href="https://github.com/wusi519/funui-vue3sourcecode">Github</a>
				<router-link to="/doc">开始</router-link>
			</p>
		</div>
	</div>
	<div class="features">
		<ul>
			<li>
				<svg>
					<use xlink:href="#icon-vue"></use>
				</svg>
				<h3>基于 Vue 3</h3>
				<p>骄傲地使用了 Vue 3 Composition API</p>
			</li>
			<li>
				<svg>
					<use xlink:href="#icon-TS"></use>
				</svg>
				<h3>基于 TypeScript </h3>
				<p>源代码采用 TypeScript 书写</p>
			</li>
			<li>
				<svg>
					<use xlink:href="#icon-tools"></use>
				</svg>
				<h3>代码易读</h3>
				<p>每个组件的源代码都极其简洁</p>
			</li>
		</ul>
	</div>

</template>

<script lang="ts">
  import Topnav from '../components/Topnav.vue';

  export default {
    components: {Topnav}
  };
</script>

<style lang="scss" scoped>
	$button-background: #399fb6;
	$button-clicked: #283e70;
	$border-radius: 4px;
	.features {
		margin: 64px auto;
		padding: 0 20px;
		@media (min-width: 800px) {
			width: 800px;
			> ul {
				> li {
					width: 50%;
				}
			}
		}
		@media screen and (min-width: 768px) and (max-width: 1200px) {
			width: 768px;
			> ul {
				display: flex;
				align-items: center;
				justify-content: center;
				> li {

				}
			}
		}
		@media (min-width: 1200px) {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			margin:0;
			padding:0;
			> ul {
				margin-top:30px;
				width:100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-left:16px;
				> li {
					width: 33.33%;
				}
			}
		}

		> ul {
			display: flex;
			flex-wrap: wrap;

			> li {
				width: 400px;
				margin: 16px 0;
				display: grid;
				justify-content: start;
				align-content: space-between;
				grid-template-areas: "icon title" "icon text";
				grid-template-columns: 80px auto;
				grid-template-rows: 1fr auto;

				> svg {
					grid-area: icon;
					width: 64px;
					height: 64px;
					fill: #283e70;
				}

				> h3 {
					grid-area: title;
					font-size: 28px;
				}

				> p {
					grid-area: text
				}
			}
		}
	}

	.funui-TopnavAndBanner {
		background: linear-gradient(145deg, rgba(198, 245, 255, 1) 0%, rgba(220, 249, 255, 1) 100%);
		clip-path: ellipse(80% 60% at 50% 40%);
	}


	.funui-banner {
		color: #283e70;
		padding: 100px 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		> h1 {
			color: #283e70;
		}

		> h2 {
			color: #1bafaf;
		}

		> .actions {
			padding: 8px 0;

			a {
				color: #fff;
				font-weight: bold;
				margin: 0 8px;
				background: $button-background;
				display: inline-block;
				-webkit-border-radius: $border-radius;
				-moz-border-radius: $border-radius;
				border-radius: $border-radius;
				padding: 8px 24px;


				&:hover {
					text-decoration: none;
					background: $button-clicked;
					box-shadow: 2px 2px 2px #234487;
				}
			}
		}
	}
</style>