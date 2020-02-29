<template>
  <div class="card">
    <h3 class="card-title">{{ title }}</h3>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  min-height: 200px;
  max-height: 200px;
  color: rgb(255, 255, 255);
  background-color: rgb(65, 184, 101);
  text-align: center;
  height: 100%;

  * > a {
    color: rgb(255, 255, 255);
  }
}

.card-title {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid white;
  height: 20%;
  margin: 0;
}

.card-content {
  height: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  & > * {
    margin-bottom: 0.5rem;
  }
}
</style>
