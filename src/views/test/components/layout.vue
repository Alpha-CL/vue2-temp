
<template>

	<div class="test-layout">
		test-layout
		<slot name="namespace"/>
		<slot/>
	</div>

</template>

<script>

export default {
	 name: "test-layout",
	 props: {
	 },
	 components: {
	 },
	 data() {
	   return {}; 
	 },
	 methods: {
	 },
};

</script>

<style lang="scss" scoped>

.test-layout {

}

</style>

