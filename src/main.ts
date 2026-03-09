import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { siteContent } from '@/data/home'
import '@/styles/theme.css'
// import '@/styles/theme.navy.css'
;(() => {
  document.title = siteContent.brand

  const metaDesc = document.querySelector('meta[name="description"]')

  if (metaDesc) {
    metaDesc.setAttribute('content', siteContent.description)
  } else {
    const meta = document.createElement('meta')
    meta.name = 'description'
    meta.content = siteContent.description
    document.head.appendChild(meta)
  }
})()

const app = createApp(App)

app.use(router)

app.mount('#app')
