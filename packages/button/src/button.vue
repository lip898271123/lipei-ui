<template>
  <button
    class="lp-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'lp-button--' + type : '',
      buttonSize ? 'lp-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-dashed':dashed
      },
      classes
    ]"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
  const prefixCls = 'lp-button';
  export default {
    name:'lpButton',
    inject:{
      elForm:{
        default: ''
      },
      elFormItem:{
        default: ''
      }
    },
    props:{
      type:{
        type:String,
        default:'default'
      },
      size:String,
      icon:{
        type:String,
        default: ''
      },
      long:{
        type:Boolean,
        default:false
      },
      nativeType:{
        type:String,
        default:'button'
      },
      loading:Boolean,
      disabled:Boolean,
      plain:Boolean,
      autofocus:Boolean,
      round:Boolean,
      circle:Boolean,
      dashed:Boolean,
    },
    computed: {
      classes () {
        return this.long?`${prefixCls}-long`:'';
        // return[
        //     {
        //       [`${prefixCls}-long`]: this.long,
        //     }
        // ];
      },
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      buttonSize() {
        return this.size || this._elFormItemSize || (this.$LIPEI || {}).size;
      },
      buttonDisabled() {
        return this.disabled || (this.elForm || {}).disabled;
      }
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  };
</script>