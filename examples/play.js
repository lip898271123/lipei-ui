import Vue from 'vue';

import App from './app.vue';
//生产环境测试
// import lipeiui from '../lib';
// import '../lib/style/index.css';
// Vue.use(lipeiui);
//本地测试  
// import lipeiui from 'packages/switch';
// import 'packages/style/src/index.scss';

import lpButton from 'packages/button';
import 'packages/style/src/index.scss';
Vue.use(lpButton);

import lpSwitch from 'packages/switch';
import lpSpin from 'packages/spin';

Vue.use(lpSwitch);
Vue.use(lpSpin);

import lpModal from 'packages/modal';

Vue.use(lpModal);

// import lpSplit from 'packages/split';
// import 'packages/style/src/split.scss';
// Vue.use(lpSplit);

new Vue({ // eslint-disable-line
  render: h => h(App)
}).$mount('#app');