<template>
  <div class="single-object" @click="onClick">
    {{ text }}
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: ''
      }
    },
    methods: {
      onClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style scoped lang="scss">
  .single-object {
    color: map-get($colors, 'green');
    text-align: center;
    border: 1px solid gray;
    padding: 50px;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
  }
</style>
