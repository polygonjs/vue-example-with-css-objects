<template>
	<Scene02 v-if="loadScene02" />
	<Scene01 v-else />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Scene01 from "./polygonjs/scenes/Scene01.vue";
import Scene02 from "./polygonjs/scenes/Scene02.vue";

export default defineComponent({
	name: "app",
	components: {
        Scene01,
        Scene02
	},
	setup() {
		const urlParamScene02 = new URLSearchParams(window.location.search).get('s')=='2'
        const loadScene02 = ref(urlParamScene02)
	
		return {
			loadScene02
		};
	},
});
</script>

<style></style>
