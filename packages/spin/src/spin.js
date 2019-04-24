import Vue from 'vue';
import Spin from './spin.vue';

import { transferIndex, transferIncrease } from 'main/utils/transfer-queue';

function handleGetIndex() {
    transferIncrease();
    return transferIndex;
}

let tIndex = handleGetIndex();
Spin.install = function(vm){
  vm.component(Spin.name, Spin);
  vm.prototype.$Spin = Spin;
};
Spin.newInstance = properties => {
    const _props = properties || {};

    const Instance = new Vue({
        data: Object.assign({}, _props, {

        }),
        render (h) {
            let vnode = '';
            if (this.render) {
                vnode = h(Spin, {
                    props: {
                        fix: true,
                        fullscreen: true
                    }
                }, [this.render(h)]);
            } else {
                vnode = h(Spin, {
                    props: {
                        size: 'large',
                        fix: true,
                        fullscreen: true
                    }
                });
            }
            return h('div', {
                'class': 'lp-spin-fullscreen lp-spin-fullscreen-wrapper',
                'style': {
                    'z-index': 2010 + tIndex
                }
            }, [vnode]);
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const spin = Instance.$children[0];

    return {
        show () {
            spin.visible = true;
            tIndex = handleGetIndex();
        },
        remove (cb) {
            spin.visible = false;
            setTimeout(function() {
                spin.$parent.$destroy();
                if (document.getElementsByClassName('lp-spin-fullscreen')[0] !== undefined) {
                    document.body.removeChild(document.getElementsByClassName('lp-spin-fullscreen')[0]);
                }
                cb();
            }, 500);
        },
        component: spin
    };
};

export default Spin;