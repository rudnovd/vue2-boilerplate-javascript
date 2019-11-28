import Vue from 'vue'

import BaseLayout from '@/layouts/BaseLayout'
import UserLayout from '@/layouts/UserLayout'
import LoadingSpinner from '@/components/base/LoadingSpinner'

Vue.component('loading-spinner', LoadingSpinner)
Vue.component('BaseLayout', BaseLayout)
Vue.component('UserLayout', UserLayout)
