import { createApp } from 'trois-renderer-proof-of-concept'
import App from './App.vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { WebGLRenderer } from 'three'

const app = createApp(App)
app.extend?.({
    OrbitControls,
    WebGLRenderer,
})

app.mount('#app')
