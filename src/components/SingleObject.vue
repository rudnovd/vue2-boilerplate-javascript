<template>
  <div class='single-object'>
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      value: String,
      default: ''
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
}
</style>
