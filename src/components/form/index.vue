<template>

  <layout>

    <slot name="form-forward"/>

    <el-form
      ref="form-plus"
      id="form-plus"
      :class="{
        'form-plus': true,
        className: true,
        'inline-form': inline,
        'column-form': !inline,
      }"
      :model="formData"
      :rules="formRules"
      :label-width="labelWidth"
      :label-positions="labelPosition"
      :disabled="formDisabled"
      :size="formSize"
      :inline="inline"
      :show-message="showMessage"
      :inline-message="inlineMessage"
      :hide-required-asterisk="hideRequiredAsterisk"
    >

      {{ formData_ }}

      <el-item>

        <slot name="form-item-forward"/>
        <slot name="form-item-behind"/>

      </el-item>

    </el-form>

    <slot name="form-behind"/>

  </layout>

</template>

<script>
import layout from "./components/layout";
// import {} from "@/utils";
// import {} from "./request";
// import {} from "./config";


export default {
  name: "form-plus",
  components: {
    layout
  },
  props: {
    formData: {
      type: Object,
      default: () => {
      }
    },
    formRules: {
      type: Object,
      default: () => {
      }
    },
    labelWidth: {           // medium | small | mini
      type: String,
      default: '100px'
    },
    formSize: {             // medium | small | mini
      type: String,
      default: 'small'
    },
    className: {
      type: String,
      default: ''
    },
    formDisabled: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    labelPosition: {        // right | left | top
      type: String,
      default: 'right'
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    inlineMessage: {
      type: Boolean,
      default: false
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false
    }
    // label-suffix: ''
    // status-icon: false
    // validate-on-rule-change: true
  },
  data() {

    // const _this = this;

    return {
      /** common variable zone start **/

      /** common variable zone end **/

      // other controller data

      /** form zone start **/
      formData_: {},
      formRules_: {}
      /** form zone end **/
    };
  },
  methods: {
    /** common methods zone start **/

    /** common methods zone end **/

    /** form common methods zone start **/

    /** form common methods zone end **/

    /** init zone start **/
    initComp() {
      this.initFormStatus();
      this.initFormData();
      this.initFormRules();
      this.testComp();
    },
    /** init zone end **/

    // other controller method

    /** form-plus methods zone start **/
    testComp() {
      console.log(this.formRef);
      console.log('this', this);
    },
    initFormStatus() {
    },
    initFormData() {
    },
    initFormRules() {
    },
    handleValidateField(field = '', validateFieldValue = () => !!this.formData[field]) {
      if (validateFieldValue(field)) {
        return this.formRef.validateField(field);
      }
    },
    handleValidateForm(callback) {
      this.formRef.validate && this.formRef.validate((valid) => {
        if (valid) {
          callback && callback(this.props.formData);
        } else {
          return false;
        }
      });
    },
    handleResetField(fieldRef) {
      fieldRef.resetField && fieldRef.resetField();
    },
    handleResetForm() {
      this.formRef.resetFields && this.formRef.resetFields();
    },
    handleClearFieldValidate(fieldRef) {
      fieldRef.clearValidate && fieldRef.clearValidate();
    },
    handleClearFormValidate() {
      this.formRef.clearValidate && this.formRef.clearValidate();
    },
    /** form-plus methods zone end **/
  },
  computed: {
    formRef() {
      return this.$refs['form-plus'];
    }
  },
  watch: {
    ["formData"]: {
      handler(nv, ov) {
        if (nv !== ov) this.formData_ = nv;
      },
      deep: true,
      immediate: true,
    },
    ["formRules"]: {
      handler(nv, ov) {
        if (nv !== ov) this.formRules_ = nv;
      },
      deep: true,
      immediate: true,
    },
  },
  created() {
  },
  async mounted() {
    this.initComp();
  },
  beforeDestroy() {
  },
};

</script>

<style lang="scss">

#form-plus {

}

</style>

