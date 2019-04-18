<template>
    <transition name="fade" v-if="spinning"> 
        <div :class="classes">
            <div :class="mainClasses">
                <span :class="dotClasses"></span>
                <div :class="textClasses"><slot></slot></div>
            </div>
        </div>
    </transition>
</template>
<script>
    import { oneOf } from 'main/utils/assist';
    const prefixCls = 'lp-spin';
    export default {
        name: 'lpSpin',
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
            }
        },
        data () {
            return {
                showText: false,
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
        },
        mounted () {
            this.showText = this.$slots.default !== undefined;
        }
    };
</script>