<template>
  <UserLayout>
    <section class='objects'>

      <div class='loading' v-if='state.isLoading'>
        <loading-spinner text='Loading objects...'/>
      </div>

      <div class='error' v-if='state.error'>
        <span> {{ state.error }} </span>
      </div>

      <section class='objects-list' v-if='!state.isLoading && !state.error'>
        <SingleObject
          v-for='object in objects'
          :key='object.id'
          :text='object.name'
          @click='openObject(object.id)'
        />
      </section>

    </section>
  </UserLayout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import SingleObject from '@/components/SingleObject'

export default {
  components: {
    SingleObject
  },
  mounted () {
    this.getObjects()
  },
  computed: {
    ...mapGetters({
      state: 'objects/state',
      objects: 'objects/objects'
    })
  },
  methods: {
    ...mapActions({
      getObjects: 'objects/getObjects'
    }),
    openObject (id) {
      this.$router.push({ path: `/objects/${id}` })
    }
  }
}
</script>

<style lang="scss" scoped>
section[class=objects] {
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: flex-start;
  grid-column-start: 1;
  grid-column-end: 19;
  height: 100%;
  margin-top: 10px;

  section[class=objects-list] {
    display: grid;
    grid-gap: 10px;
    align-items: center;
    width: 100%;
  }

  .loading {
    @extend %loading-section;
  }
}

@media screen and (min-width: map-get($grid-breakpoints, 'maximum')) {
  section[class=objects-list] {
    grid-template-columns: repeat(7, 1fr);
  }
}

@media screen and (min-width: map-get($grid-breakpoints, 'medium')) and (max-width: map-get($grid-breakpoints, 'maximum')) {
  section[class=objects-list] {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media screen and (min-width: map-get($grid-breakpoints, 'minimum')) and (max-width: map-get($grid-breakpoints, 'medium')) {
  section[class=objects-list] {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: map-get($grid-breakpoints, 'minimum')) {
  section[class=objects-list] {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
