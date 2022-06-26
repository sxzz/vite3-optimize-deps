import { createApp, defineAsyncComponent } from 'vue'

// force to use dynamic import
createApp(defineAsyncComponent(() => import('./App.vue'))).mount('#app')
