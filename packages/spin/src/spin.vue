<template>
    <transition name="fade" v-if="spinning"> 
        <div :class="classes" v-if="fullscreenVisible">
            <div :class="mainClasses">
                <span :class="dotClasses"></span>
                <div :class="textClasses"><slot></slot></div>
            </div>
        </div>
    </transition>
</template>
<script>
    import { oneOf } from 'main/utils/assist';
    import ScrollbarMixins from 'main/mixins/mixins-scrollbar';
    const prefixCls = 'lp-spin';
    export default {
        name: 'lpSpin',
        mixins: [ ScrollbarMixins ],
        props: {
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default () {
                    return !this.$LIPEI || this.$LIPEI.size === '' ? 'default' : this.$LIPEI.size;
                }
            },
            fix: {
                type: Boolean,
                default: false
            },
            spinning:{
                type: Boolean,
                default:true
            },
            fullscreen: {
                type: Boolean,
                default: false
            },
        },
        data () {
            return {
                showText: false,
                visible: false
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-fix`]: this.fix,
                        [`${prefixCls}-show-text`]: this.showText,
                        [`${prefixCls}-fullscreen`]: this.fullscreen
                    }
                ];
            },
            mainClasses () {
                return `${prefixCls}-main`;
            },
            dotClasses () {
                return `${prefixCls}-dot`;
            },
            textClasses () {
                return `${prefixCls}-text`;
            },
            fullscreenVisible(){
                if (this.fullscreen) {
                    return this.visible;
                } else {
                    return true;
                }
            }
        },
        watch: {
            visible (val) {
                if (val) {
                    this.addScrollEffect();
                } else {
                    this.removeScrollEffect();
                }
            }
        },
        mounted () {
            this.showText = this.$slots.default !== undefined;
        }
    };
</script>