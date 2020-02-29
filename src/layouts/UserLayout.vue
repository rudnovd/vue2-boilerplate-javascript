<template>
  <BaseLayout>
    <Header />

    <main>
      <transition name="transition-router">
        <slot></slot>
      </transition>
    </main>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout'
import Header from '@/components/Header'

export default {
  name: 'UserLayout',
  components: {
    BaseLayout,
    Header
  }
}
</script>

<style lang="scss" scoped>
main {
  min-height: 90vh;
}

.transition-router-enter-active,
.transition-router-leave-active {
  transition: opacity $transition-router;
}

.transition-router-enter-active,
.transition-router-leave-active {
  opacity: 0;
}
</style>
