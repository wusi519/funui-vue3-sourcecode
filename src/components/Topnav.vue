<template>
	<div class="navwrapper">


		<div class="funui-topnav">
			<router-link to="/" class="logo-wrapper">
				<svg class="logo">
					<use xlink:href="#icon-funui"></use>
				</svg>
			</router-link>
			<ul class="menu">
				<router-link to="/doc">
					<span>文档</span>
				</router-link>
			</ul>
			<svg class="toggleAside" @click="toggleMenu" v-if="toggleMenuButtonVisible">
				<use xlink:href="#icon-menu"></use>
			</svg>
		</div>
	</div>
</template>
<script lang="ts">
  import {inject, Ref} from 'vue';

  export default {
    props: {
      toggleMenuButtonVisible: {
        type: Boolean,
        default: false
      }
    },
    setup() {
      const asideVisible = inject<Ref<boolean>>('asideVisible');
      const toggleMenu = () => {
        asideVisible.value = !asideVisible.value;
      };
      return {toggleMenu};
    }
  };
</script>
<style lang="scss" scoped>
	$color: #273849;
	.funui-topnav {
		position: fixed;
		top:0;
		left: 0;
		width: 100%;
		color: $color;
		display: flex;
		z-index: 20;
		justify-content: center;
		align-items: center;
		-moz-user-select: none;
		background: white;
		box-shadow: 0 2px 8px -6px $color;
		@media (max-width: 500px) {
			padding-left: 8px;
		}

		.logo-wrapper {
			max-width: 6em;
			margin-right: auto;
			text-decoration: none;
			margin-left:16px;
			.logo {
				width: 64px;
				height: 64px;
				fill: $color;
			}
		}

		.menu {
			display: flex;
			white-space: nowrap;
			flex-wrap: nowrap;

			a {
				margin: 0 .6em;
				font-size: 20px;
				font-weight: bold;
				color: $color;
				text-decoration: none;
				position: relative;

				&:after {
					content: '';
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					height: 3px;
					border-radius: 1px;
					background: #ffba41;
					display: inline-block;
					transform: scale3d(0, 1, 1);
					transform-origin: left;
					transition: all 0.5s;
				}

				&:hover:after {
					transform: scale3d(1, 1, 1);
				}
			}
		}

		.toggleAside {
			display: none;
		}

		@media (max-width: 500px) {
			.logo-wrapper {
				margin-left: auto;
			}
			.menu {
				display: none;
			}
			.toggleAside {
				display: inline-block;
				width: 36px;
				height: 36px;
				position: absolute;
				left: 16px;
				top: 50%;
				transform: translateY(-50%);
			}
		}
	}
</style>