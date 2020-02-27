<template>
  <div class="base-spinner" :style="style" />
</template>

<script>
export default {
  name: 'BaseSpinner',
  props: {
    size: {
      type: String,
      required: false,
      default: '1rem'
    }
  },
  computed: {
    style() {
      return {
        height: this.size,
        width: this.size
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-spinner {
  display: inline-block;
  border: 3px solid;
  border-color: rgb(0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.3);
  animation: spin 2s linear infinite;
  border-radius: 50%;
  opacity: 0.2;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
