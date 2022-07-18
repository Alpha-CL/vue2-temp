<template>

  <div class="form-plus-layout">
    <slot name="prev"/>
    <slot/>
    <slot name="after"/>
  </div>

</template>

<script>

export default {
  name: "form-plus-layout",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
};

</script>

<style lang="scss">

.form-plus-layout {

  #form-plus {

    &.inline-form {
    }

    &.column-form {
    }
  }
}

</style>

