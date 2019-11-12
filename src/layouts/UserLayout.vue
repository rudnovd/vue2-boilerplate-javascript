<template>
  <BaseLayout>
    <Header />

    <main>
      <transition name="fade">
        <slot></slot>
      </transition>
    </main>

    <Footer />
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    BaseLayout,
    Footer,
    Header
  }
};
</script>

<style lang="scss" scoped>
main {
  min-height: 90vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2.5s;
}

.fade-enter-active,
.fade-leave-active {
  opacity: 0;
}
</style>
