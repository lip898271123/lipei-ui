import Spin from './src/spin';

/* istanbul ignore next */
Spin.install = function(Vue) {
  Vue.component(Spin.name,Spin);
};

export default Spin;
