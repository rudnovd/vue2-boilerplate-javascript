<template>
  <body>
    <Header/>

    <main>
      <router-view :key='$route.fullPath'/>
    </main>

    <Footer/>
  </body>
</template>

<script>
import Header from '@/components/Header'

import Footer from '@/components/Footer'

export default {
  components: {
    Footer,
    Header
  }
}
</script>

<style lang="scss">
@import '@/css/main.scss';
</style>
