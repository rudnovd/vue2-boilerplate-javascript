<template>
  <button type="button" :disabled="disabled" class="base-button" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button {
  background-color: transparent;
  border-color: transparent;
  display: inline-block;
  font-weight: 400;
  color: rgb(33, 37, 41);
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  outline: 0;
  transition: color $transition-standard ease-in-out, background-color $transition-standard ease-in-out,
    border-color $transition-standard ease-in-out;
}

@import '@/scss/buttons.scss';
</style>
