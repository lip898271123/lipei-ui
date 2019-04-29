import Affix from './src/affix';

/* istanbul ignore next */
Affix.install = function(Vue) {
  Vue.component(Affix.name, Affix);
};

export default Affix;
