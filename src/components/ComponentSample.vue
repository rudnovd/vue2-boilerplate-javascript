<template>
  <div class='component'>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  beforeCreate () {
  },
  created () {
  },
  beforeMount () {
  },
  mounted () {
  },
  beforeUpdate () {
  },
  updated () {
  },
  activated () {
  },
  deactivated () {
  },
  beforeDestroy () {
  },
  destroyed () {
  },
  data () {
    return {
    }
  },
  props: {
    prop1: {
      value: String,
      required: true,
      default: ''
    },
    prop2: {
      value: Object,
      required: false,
      default: {}
    }
  },
  computed: {
    ...mapGetters({
    })
  },
  methods: {
    ...mapActions({
    })
  },
  watch: {
  }
}
</script>

<style scoped lang="scss">
.component {
}
</style>
