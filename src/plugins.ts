// import type { App, Plugin } from 'vue'

// import { Avatar } from './avatar'
// import { Button } from './button'
// import { Link } from './link'

// const plugins: Plugin[] = [Link, Button]

// export default plugins
// export const registerGlobalComponents = (app: App) => {
//   app.use(Avatar)
// }
import type { App, Plugin } from 'vue'

import { Avatar } from './avatar'
import { Button } from './button'
import { Link } from './link'

const plugins: Plugin[] = [Avatar, Button, Link]

export default plugins

export const registerGlobalComponents = (app: App) => {
  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}
