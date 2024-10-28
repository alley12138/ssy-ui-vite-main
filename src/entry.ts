import type { App } from 'vue'
import { version } from '../package.json'
import Avatar from './avatar/Avatar.vue'
import SButton from './button/Button'
import TSXButton from './TSXButton'
import 'virtual:uno.css'

// 导出单独组件
export { Avatar, SButton, TSXButton }
export * from './button'
export * from './link'

// 编写一个插件，实现一个 install 方法
export default {
  install(app: App): void {
    app.component(SButton.name, SButton)
    app.component(TSXButton.name, TSXButton)
  },
  version,
}
