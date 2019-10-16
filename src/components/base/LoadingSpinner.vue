<template>
  <div class='loading-spinner'>
    <span class='spinner' :style='{ height: size, width: size }'/>

    <div class='text' v-if='text'>
      <span :style='{ fontSize: fontSize }'>{{ text }}</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading-spinner',
  props: {
    size: {
      value: String,
      default: '3em',
      required: false
    },
    fontSize: {
      value: String,
      default: '1em',
      required: false
    },
    text: {
      value: String,
      default: '',
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .spinner {
    display: block;
    border: 5px solid rgba(map-get($colors, 'green'), 0.2);
    border-top-color: map-get($colors, 'green');
    border-radius: 50%;
    animation: spin 2s linear infinite;

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  }

  .text {
    display: block;
    margin-top: 5px;
  }
}

</style>
