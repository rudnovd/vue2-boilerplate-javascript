<template>
  <div class='objects'>
    <SingleObject
      v-for='object in objects'
      :key='object.id'
      :text='object.name'
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import SingleObject from '@/components/SingleObject'

export default {
  components: {
    SingleObject
  },
  mounted () {
    this.getObjects()
  },
  data () {
    return {
      objects: [
        {
          id: 1,
          name: 'name_1'
        },
        {
          id: 2,
          name: 'name_2'
        },
        {
          id: 3,
          name: 'name_3'
        },
        {
          id: 4,
          name: 'name_4'
        },
        {
          id: 5,
          name: 'name_5'
        },
        {
          id: 6,
          name: 'name_6'
        },
        {
          id: 7,
          name: 'name_7'
        },
        {
          id: 8,
          name: 'name_8'
        },
        {
          id: 9,
          name: 'name_9'
        },
        {
          id: 10,
          name: 'name_10'
        },
        {
          id: 11,
          name: 'name_11'
        },
        {
          id: 12,
          name: 'name_12'
        }
      ]
    }
  },
  methods: {
    ...mapActions({
      getObjects: 'objects/getObjects'
    })
  }
}
</script>

<style lang='scss' scoped>
.objects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-start: 3;
  grid-column-end: 17;
  align-items: center;
}
</style>
