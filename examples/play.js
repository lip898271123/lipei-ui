import Vue from 'vue';

import App from './app.vue';
//生产环境测试
// import lipeiui from '../lib';
// import '../lib/style/index.css';

//本地测试  
// import lipeiui from 'packages/switch';
// import 'packages/style/src/index.scss';

import lpAffix from 'packages/affix';
import 'packages/style/src/affix.scss';
Vue.use(lpAffix);

// import lpSpin from 'packages/spin';
// import 'packages/style/src/spin.scss';
// Vue.use(lpSpin);

// import lpSplit from 'packages/split';
// import 'packages/style/src/split.scss';
// Vue.use(lpSplit);

new Vue({ // eslint-disable-line
  render: h => h(App)
}).$mount('#app');