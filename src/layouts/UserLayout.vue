<template>
  <BaseLayout>
    <Header/>

    <main>
      <slot></slot>
    </main>

    <Footer/>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    BaseLayout,
    Footer,
    Header
  }
}
</script>
