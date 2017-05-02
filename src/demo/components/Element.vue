<style lang="stylus">
    .Element
        display: block
        position absolute
        background-color dimgrey
        width 50px
        height 50px
</style>

<script>
    export default{
        name: 'Element',
        data(){
            return {
                colors: [
                    "aquamarine",
                    "aqua",
                    "darkslateblue",
                    "cornflowerblue",
                    "coral",
                    "yellowgreen",
                    "lightseagreen",
                    "mediumseagreen",
                    "lightcoral",
                    "plum",
                    "dimgrey",
                ]
            }
        },
        props: {
            id: {
                type: Number,
                default: 0
            },
            enterDuration: {
                type: Number,
                default: 0.3,
            },
            leaveDuration: {
                type: Number,
                default: 0.3
            }
        },
        methods: {
            onBeforeEnter(el){
                TweenMax.set(el, {x: 50 * this.xOffset, y: 100, scale: 1.6, opacity: 0});
            },
            onEnter(el, done){
                TweenMax.to(el, this.enterDuration, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    ease: Sine.easeOut,
                    onComplete: done
                });
            },
            onLeave(el, done){
                TweenMax.to(el, this.leaveDuration, {
                    x: 0,
                    y: -100,
                    scale: 0.7,
                    opacity: 0,
                    ease: Sine.easeIn,
                    onComplete: done
                });
            }
        },
        computed: {
            xOffset(){
                return this.id % 2 === 0 ? -1 : 1;
            }
        }
    };
</script>

<template>
    <transition-plus @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
        <div class="Element" :style="{backgroundColor: colors[id%colors.length], zIndex:id}"></div>
    </transition-plus>
</template>