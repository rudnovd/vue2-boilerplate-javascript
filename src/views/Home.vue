<template>
  <UserLayout>
    <section class="home">
      <section class="technologies">
        <div class="card">
          <h3 class="title">Vue-router</h3>

          <div class="content">
            <span>
              <router-link to="/">
                router-link to="/"
              </router-link>
            </span>
            <span>
              <router-link to="/objects">
                router-link to="objects"
              </router-link>
            </span>
            <span>
              <router-link to="/objects/1">
                router-link to="objects/1"
              </router-link>
            </span>
          </div>
        </div>

        <div class="card">
          <h3 class="title">Vuex</h3>
          <div class="content">
            <a href="#" @click="showVuex('objects')">Objects</a>
            <a href="#" @click="showVuex('user')">User</a>
          </div>
        </div>

        <div class="card">
          <h3 class="title">SASS</h3>
          <div class="content">
            <span>Variables</span>
            <span>Mixins</span>
            <span>Placeholders</span>
          </div>
        </div>
      </section>

      <section class="technologies">
        <div class="card">
          <h3 class="title">Unit tests</h3>
          <div class="content">
            <span>Jest</span>
          </div>
        </div>

        <div class="card">
          <h3 class="title">End to end tests</h3>
          <div class="content">
            <span>Cypress</span>
          </div>
        </div>

        <div class="card">
          <h3 class="title">Eslint style</h3>
          <div class="content">
            <span>Standard</span>
          </div>
        </div>
      </section>

      <section class="information" v-if="showInformation">
        <div class="card">
          <div
            class="object"
            v-for="(info, index) in information"
            :key="info.id"
          >
            <h4>{{ index }}:</h4>
            <span>{{ info }} </span>
          </div>
        </div>
      </section>
    </section>
  </UserLayout>
</template>

<script>
import { mapActions } from "vuex";

export default {
  mounted() {
    this.getObjects();
  },
  data() {
    return {
      showInformation: false,
      information: {}
    };
  },
  methods: {
    ...mapActions({
      getObjects: "objects/getObjects"
    }),
    showVuex(object) {
      this.showInformation = true;

      if (object === "objects") {
        this.information = {
          state: this.$store.state.objects.state,
          data: this.$store.state.objects.data
        };
      } else if (object === "user") {
        this.information = {
          state: this.$store.state.user.state,
          data: this.$store.state.user.data
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
div[class="card"] {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 10px;

  * {
    margin-top: 5px;
    margin-bottom: 5px;
  }
}

section[class="home"] {
  grid-column-start: 1;
  grid-column-end: 19;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  margin-top: 10px;

  section[class="technologies"] {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 200px;
    margin-bottom: 10px;

    h3 {
      margin-top: 10px;
      margin-bottom: 0;
    }

    div[class="card"] {
      flex-direction: column;
      flex: 0 1 300px;
      min-height: 200px;
      max-height: 200px;
      color: #fff;
      background-color: rgb(65, 184, 101);
      border-color: rgb(65, 184, 101);

      a {
        color: rgb(255, 255, 255);
      }

      .title {
        border-bottom: 2px solid white;
      }

      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        font-size: 1.2em;
        height: 100%;

        * {
          margin-top: 5px;
          margin-bottom: 5px;
        }
      }
    }
  }
}

section[class="information"] {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;

  div[class="card"] {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    flex: 0 1 940px;
    min-height: 300px;
    color: #fff;
    background-color: rgb(0, 68, 255);
    padding: 20px;
  }
}
</style>
