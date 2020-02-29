<template>
  <UserLayout>
    <section class="home-page">
      <section class="technologies">
        <div class="container">
          <div class="technologies-grid">
            <h2 class="section-title">
              Technologies
            </h2>
            <Card title="Vue-router">
              <router-link to="/">
                Home page
              </router-link>
              <router-link to="*">
                Error page
              </router-link>
              <router-link to="/login">
                Login page
              </router-link>
            </Card>

            <Card title="Vuex">
              <a href="#vuex">Objects module</a>
            </Card>

            <Card title="SCSS">
              <span>Variables</span>
              <span>Mixins</span>
            </Card>

            <Card title="Unit tests">
              <span>Jest</span>
            </Card>

            <Card title="End to end tests">
              <span>Cypress</span>
            </Card>

            <Card title="Code style rules">
              <a href="https://vuejs.org/v2/style-guide/#Priority-A-Rules-Essential-Error-Prevention">
                vue/essential
              </a>
              <a href="https://vuejs.org/v2/style-guide/#Priority-B-Rules-Strongly-Recommended-Improving-Readability">
                vue/strongly-recommended
              </a>
              <a
                href="https://vuejs.org/v2/style-guide/#Priority-C-Rules-Recommended-Minimizing-Arbitrary-Choices-and-Cognitive-Overhead"
              >
                vue/recommended
              </a>
              <a href="https://github.com/prettier/eslint-config-prettier#special-rules">
                @vue/prettier
              </a>
            </Card>
          </div>
        </div>
      </section>

      <section class="components">
        <div class="container">
          <div class="components-grid">
            <h2 class="section-title">Components</h2>
            <Card title="Button">
              <BaseButton class="button-primary">Button</BaseButton>
            </Card>

            <Card title="Spinner">
              <BaseSpinner size="3rem" />
            </Card>

            <Card title="Dialog">
              <BaseButton class="button-primary" @click="showDialog = true">Show dialog</BaseButton>
              <BaseDialog :open="showDialog" @close="showDialog = false">
                <template #header>
                  Header slot
                </template>

                <template #content>
                  <p>Content slot</p>
                </template>
              </BaseDialog>
            </Card>
          </div>
        </div>
      </section>

      <section id="vuex" class="vuex">
        <div class="container">
          <h2 class="section-title">Vuex</h2>
          <h4>Objects module</h4>

          <pre class="code">
            <span>//index.js</span>
            <code>
              import actions from './actions'
              import getters from './getters'
              import mutations from './mutations'
              import state from './state'

              export default {
                namespaced: true,
                actions,
                getters,
                mutations,
                state
              }
            </code>
          </pre>

          <pre class="code">
            <span>//actions.js</span>
            <code>
              <span>import httpService from '@/services/httpService'</span>

              export default { 
                async getObjects({ commit, state }) {
                  try {
                    const response = await httpService.get('https://api.frankfurter.app/latest', { amount: 1 })
                    const payload = {
                      objects: response.data 
                    }
                    commit('SET_OBJECTS', payload)
                    return state.objects
                  } catch (error) {
                    throw error 
                  }
                }
              }
            </code>
          </pre>

          <pre class="code">
            <span>//getters.js</span>
            <code>
              export default {
                objects: state => {
                  return state.objects
                }
              }
            </code>
          </pre>

          <pre class="code">
            <span>//mutations.js</span>
            <code>
              SET_OBJECTS(state, { objects }) {
                state.objects = objects
              }
            </code>
          </pre>

          <pre class="code">
            <span>//state.js</span>
            <code>
              export default {
                objects: []
              }
            </code>
          </pre>
        </div>
      </section>
    </section>
  </UserLayout>
</template>

<script>
import { mapActions } from 'vuex'
import Card from '@/components/Card.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSpinner from '@/components/base/BaseSpinner.vue'
import BaseDialog from '@/components/base/BaseDialog.vue'

export default {
  name: 'Home',
  components: {
    Card,
    BaseButton,
    BaseSpinner,
    BaseDialog
  },
  data() {
    return {
      showDialog: false
    }
  },
  mounted() {
    this.getObjects()
  },
  methods: {
    ...mapActions({
      getObjects: 'objects/getObjects'
    })
  }
}
</script>

<style lang="scss" scoped>
.technologies,
.components,
.vuex {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.technologies {
  background-color: rgb(250, 250, 250);
}

.components {
  background-color: rgb(240, 240, 240);
}

.vuex {
  background-color: rgb(235, 235, 235);
}

.technologies-grid,
.components-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem 1rem;
}

.section-title {
  text-align: center;
  margin: 0;
  grid-column: span 3;
}

.code {
  overflow: auto;
  background-color: rgb(246, 248, 250);
  font-size: 0.85rem;
  border-radius: 3px;
  line-height: 1.8;
  font-family: monospace;
  margin-bottom: 1rem;
}
</style>
