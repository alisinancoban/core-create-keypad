import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index'
import store from './store/store'

import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faHouseSignal } from '@fortawesome/free-solid-svg-icons'
import { faTv } from '@fortawesome/free-solid-svg-icons'
import { faShower } from '@fortawesome/free-solid-svg-icons'
import { faFaucetDrip } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faHouseFire } from '@fortawesome/free-solid-svg-icons'
import { faBath } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { faPlug } from '@fortawesome/free-solid-svg-icons'
import { faStairs } from '@fortawesome/free-solid-svg-icons'
import { faFan } from '@fortawesome/free-solid-svg-icons'

library.add(faTwitter,faLightbulb,faUserSecret,faHouse,faHouseSignal,faTv,faShower,faFaucetDrip,faBell,faHouseFire,faBath,faSnowflake,faDoorOpen,faPlug,faStairs,faFan)
const app = createApp(App)
            .component('font-awesome-icon', FontAwesomeIcon)

app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(store);
app.use(router);
app.mount('#app');
