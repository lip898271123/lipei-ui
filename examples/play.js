import Vue from 'vue';

import App from './app.vue';
//生产环境测试
// import lipeiui from '../lib';
// import '../lib/style/index.css';

//本地测试
import lipeiui from 'packages/switch';
import 'packages/style/src/index.scss';

Vue.use(lipeiui);

new Vue({ // eslint-disable-line
  render: h => h(App)
}).$mount('#app');