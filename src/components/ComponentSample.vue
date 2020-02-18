<template>
  <div class="component"></div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    prop1: {
      type: String,
      required: true,
      default: ''
    },
    prop2: {
      type: Object,
      required: false,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({})
  },
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},

  methods: {
    ...mapActions({})
  }
}
</script>

<style scoped lang="scss">
.component {
}
</style>
