<style lang="stylus">
    *, *:before, *:after
        -webkit-box-sizing border-box
        -moz-box-sizing border-box
        box-sizing border-box

    html, body
        background-color #1c1f24
        font-family "Helvetica Neue", Helvetica, Arial, sans-serif
        color white
        border 0
        margin 0
        width 100%
        height 100%
        min-height 100%

    #app
        width 100%
        height 100%
        min-height 100%
        display flex
        flex-direction row

    aside
        width 240px
        padding 0 10px

    label
        display block

    button
        display block
        border none
        outline none
        text-align center
        cursor pointer
        width 100%
        height 30px
        font-size 14px
        margin-top 20px

    main
        flex-grow 1
        min-height 100%
        position relative
        background-color lighten(#1c1f24, 10)
        cursor pointer

    figure
        width 125px
        display: block
        position absolute
        right 0
        bottom 0

    .Transitions
        display block
        position absolute
        transform translate(-25px, -25px)
        left 50%
        top 50%
</style>

<script>
    import AnimElement from "./Element.vue";
    export default{
        name: 'App',
        data(){
            return {
                count: 0,
                transitionMode: "out-in",
                enterDuration: 0.8,
                leaveDuration: 0.3,
            };
        },
        components: {
            AnimElement
        },
        methods: {
            addElement(){
                this.count++;
            }
        }
    };
</script>

<template>
    <div id="app">
        <aside>
            <h1>Vue Transition Group Plus</h1>
            <h4>Transition Mode:</h4>
            <label>
                <input type="radio" name="transitionMode" value="out-in" v-model="transitionMode">Out-In
            </label>
            <label>
                <input type="radio" name="transitionMode" value="in-out" v-model="transitionMode">In-Out
            </label>
            <label>
                <input type="radio" name="transitionMode" value="simultaneous" v-model="transitionMode">Simultaneous
            </label>
            <h4>Transition Duration:</h4>
            <label>
                Enter Duration: {{enterDuration}}
                <input type="range" min="0" max="0.8" step="0.1" v-model.number="enterDuration">
            </label>
            <label>
                Leave Duration: {{leaveDuration}}
                <input type="range" min="0" max="0.5" step="0.1" v-model.number="leaveDuration">
            </label>
            <button @click="addElement">Animate</button>
        </aside>
        <main @click="addElement">
            <transition-group-plus tag="div"
                                   class="Transitions"
                                   :transition-mode="transitionMode">
                <anim-element :key="'element'+count"
                              :id="count"
                              :enterDuration="enterDuration"
                              :leaveDuration="leaveDuration">
                </anim-element>
            </transition-group-plus>
            <figure>
                <a href="http://foostudio.mx" target="_blank">
                <svg id="9e43c0aa-e399-48b8-8a93-383310d4bf3d" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 146.51 38.85"><title>logo</title><path d="M48.77,10.29H48.14a12.67,12.67,0,0,0-12,10.38L33.28,38.74A8.63,8.63,0,0,0,42,49.12h0.63a12.68,12.68,0,0,0,12-10.38L57.5,20.68A8.63,8.63,0,0,0,48.77,10.29Zm5.34,10.38L51.29,38.74a8.54,8.54,0,0,1-8.11,7H42.55a5.82,5.82,0,0,1-5.88-7l2.81-18.06a8.54,8.54,0,0,1,8.11-7h0.63A5.82,5.82,0,0,1,54.11,20.68Z" transform="translate(-11.78 -10.29)" fill="#fff"/><polygon points="24.07 3.2 24.59 0.01 6.18 0.01 5.9 1.79 5.89 1.79 0 38.85 3.2 38.85 6.22 19.96 18.71 19.96 19.2 16.77 6.72 16.77 8.87 3.2 24.07 3.2" fill="#fff"/><path d="M74.39,10.29H73.76a12.67,12.67,0,0,0-12,10.38L58.9,38.74a8.64,8.64,0,0,0,8.72,10.38h0.63a12.67,12.67,0,0,0,12-10.38l2.82-18.06A8.64,8.64,0,0,0,74.39,10.29Zm5.34,10.38L76.91,38.74a8.54,8.54,0,0,1-8.12,7H68.16a5.82,5.82,0,0,1-5.88-7L65.1,20.68a8.54,8.54,0,0,1,8.12-7h0.63A5.82,5.82,0,0,1,79.73,20.68Z" transform="translate(-11.78 -10.29)" fill="#fff"/><path d="M90.3,38.7l2.82-18.06c0.83-4.68,4.54-8,7.28-9.71l0.08-.23a12.81,12.81,0,0,0-9.1,10L88.56,38.74a8.61,8.61,0,0,0,5.95,10V48.5A9.9,9.9,0,0,1,90.3,38.7Z" transform="translate(-11.78 -10.29)" fill="#ee2553"/><path d="M156.42,20.73L153.6,38.79c-0.83,4.68-4.54,8-7.28,9.71l-0.08.23a12.81,12.81,0,0,0,9.1-10l2.81-18.06a8.61,8.61,0,0,0-5.95-10v0.23A9.9,9.9,0,0,1,156.42,20.73Z" transform="translate(-11.78 -10.29)" fill="#ee2553"/><path d="M103.47,36.71a4,4,0,0,1-.5,1.37,4.63,4.63,0,0,1-.93,1.11,4.32,4.32,0,0,1-1.24.76,3.69,3.69,0,0,1-1.42.28H99a3.11,3.11,0,0,1-1.33-.28,2.89,2.89,0,0,1-1-.76,2.85,2.85,0,0,1-.57-1.11,3.17,3.17,0,0,1,0-1.37l0.56-3.62h1.22l-0.56,3.62a2.18,2.18,0,0,0,0,.89,1.86,1.86,0,0,0,.37.73,1.82,1.82,0,0,0,.66.49,2.08,2.08,0,0,0,.87.18h0.39a2.41,2.41,0,0,0,.93-0.18,2.94,2.94,0,0,0,1.4-1.22,2.53,2.53,0,0,0,.33-0.89l0.29-1.88a5.51,5.51,0,0,0,0-1.91A4.06,4.06,0,0,0,102,31.5a4.36,4.36,0,0,0-1-1.09c-0.4-.31-0.82-0.61-1.26-0.9a4.65,4.65,0,0,1-1.63-1.78,4.18,4.18,0,0,1-.22-2.56l0.2-1.34a4,4,0,0,1,.5-1.38,4.46,4.46,0,0,1,.93-1.13,4.22,4.22,0,0,1,1.24-.74,3.81,3.81,0,0,1,1.42-.27h0.39a3.19,3.19,0,0,1,1.33.27,2.75,2.75,0,0,1,1,.74,2.82,2.82,0,0,1,.57,1.13,3.23,3.23,0,0,1,0,1.38h-1.22a2.24,2.24,0,0,0,0-.9,1.8,1.8,0,0,0-1-1.21,2.06,2.06,0,0,0-.88-0.18H102a2.43,2.43,0,0,0-.92.18,2.89,2.89,0,0,0-.81.49,3.17,3.17,0,0,0-.61.72,2.4,2.4,0,0,0-.33.9l-0.2,1.34a3,3,0,0,0,.06,1.25,3.28,3.28,0,0,0,.5,1,4.37,4.37,0,0,0,.84.88c0.33,0.27.69,0.54,1.06,0.8a6.72,6.72,0,0,1,1.13.91,4.11,4.11,0,0,1,.79,1.17,4.88,4.88,0,0,1,.39,1.55,8,8,0,0,1-.11,2.08Z" transform="translate(-11.78 -10.29)" fill="#fff"/><path d="M111.58,21.67L108.7,40h-1.22l2.88-18.32h-3.42l0.19-1.22h8.06L115,21.67h-3.42Z" transform="translate(-11.78 -10.29)" fill="#fff"/><path d="M123,20.44h1.22l-2.56,16.27a3.91,3.91,0,0,1-.5,1.37,4.48,4.48,0,0,1-.93,1.11,4.34,4.34,0,0,1-1.23.76,3.71,3.71,0,0,1-1.42.28h-0.49a3.07,3.07,0,0,1-1.33-.28,2.83,2.83,0,0,1-1.58-1.87,3.22,3.22,0,0,1,0-1.37l2.57-16.27h1.22l-2.56,16.27a2.17,2.17,0,0,0,0,.89,1.78,1.78,0,0,0,1,1.22,2.07,2.07,0,0,0,.87.18h0.49a2.39,2.39,0,0,0,.93-0.18,2.82,2.82,0,0,0,.79-0.49,2.92,2.92,0,0,0,.61-0.73,2.47,2.47,0,0,0,.33-0.89Z" transform="translate(-11.78 -10.29)" fill="#fff"/><path d="M127.36,20.44h4a3.35,3.35,0,0,1,1.33.26,2.85,2.85,0,0,1,1,.7,2.69,2.69,0,0,1,.59,1.06,3,3,0,0,1,.06,1.36l-2,12.65a3.63,3.63,0,0,1-.47,1.37,4.56,4.56,0,0,1-.93,1.11,4.39,4.39,0,0,1-1.24.76,3.69,3.69,0,0,1-1.42.28h-4Zm1,1.22-2.71,17.09h2.78a2.34,2.34,0,0,0,.93-0.18,3,3,0,0,0,.8-0.49,2.69,2.69,0,0,0,.61-0.73,2.55,2.55,0,0,0,.31-0.89l2-12.65a1.73,1.73,0,0,0-.42-1.54,2,2,0,0,0-1.53-.61h-2.78Z" transform="translate(-11.78 -10.29)" fill="#fff"/><path d="M136.2,40H135l3.08-19.54h1.22Z" transform="translate(-11.78 -10.29)" fill="#fff"/><path d="M147.41,36.71a3.9,3.9,0,0,1-.5,1.37,4.55,4.55,0,0,1-.93,1.11,4.4,4.4,0,0,1-1.24.76,3.69,3.69,0,0,1-1.42.28h-0.49a3.1,3.1,0,0,1-1.33-.28,2.86,2.86,0,0,1-1-.76,2.81,2.81,0,0,1-.57-1.11,3.17,3.17,0,0,1,0-1.37l2-12.89a4,4,0,0,1,.5-1.38,4.46,4.46,0,0,1,.93-1.13,4.22,4.22,0,0,1,1.24-.74A3.8,3.8,0,0,1,146,20.3h0.49a3.19,3.19,0,0,1,1.33.27,2.75,2.75,0,0,1,1,.74,2.81,2.81,0,0,1,.57,1.13,3.23,3.23,0,0,1,.05,1.38Zm0.8-12.89a2.18,2.18,0,0,0,0-.9,1.81,1.81,0,0,0-.37-0.72,1.86,1.86,0,0,0-.65-0.49,2,2,0,0,0-.88-0.18H145.8a2.44,2.44,0,0,0-.92.18,2.92,2.92,0,0,0-.8.49,3.11,3.11,0,0,0-.61.72,2.39,2.39,0,0,0-.33.9l-2,12.89a2.18,2.18,0,0,0,0,.89,1.78,1.78,0,0,0,1,1.22A2.09,2.09,0,0,0,143,39h0.49a2.39,2.39,0,0,0,.93-0.18,2.89,2.89,0,0,0,.8-0.49,2.94,2.94,0,0,0,.61-0.73,2.4,2.4,0,0,0,.33-0.89Z" transform="translate(-11.78 -10.29)" fill="#fff"/></svg>
                </a>
            </figure>
        </main>
    </div>
</template>