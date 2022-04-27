import type { App, Plugin } from 'vue'
import OverlayScrollbars from './OverlayScrollbars.vue'

const install = (app: App) => {
  app.component('OverlayScrollbars', OverlayScrollbars)
}

OverlayScrollbars.install = install

export default OverlayScrollbars as typeof OverlayScrollbars & Plugin
