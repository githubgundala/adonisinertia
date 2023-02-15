import JQuery from 'jquery'
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { Link } from '@inertiajs/vue3'

createInertiaApp({
  resolve: (name) => require(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(JQuery)
      .component('inertia-link', Link)
      .mount(el)
  },
})
