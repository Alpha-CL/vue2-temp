<template>

  <div class="test-layout">

    <div class="test-name">
      <slot name="namespace"/>
    </div>

    <slot/>

  </div>

</template>

<script>

export default {
  name: "test-layout",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
};

</script>

<style lang="scss" scoped>

.test-layout {

}

</style>

