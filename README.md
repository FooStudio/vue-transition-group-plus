# Vue TransitionGroupPlus

A Vue plugin and components that allows interruptible transitions and specifying transition order.


### Installation

```
    npm install vue-transition-group-plus --save
```

```
    yarn add vue-transition-group-plus
```

### Why?

Vue transitions are really powerful, but since Vue 2.0+ transitions lack the ability to use transition modes on components with different transition components.
This plugin tries to bring back that functionality into Vue as in Vue 1.0

### Note

This library is not a replacement for Vue native TransitionGroup, that component is for list transitions. VueTransitionGroupPlus goal is to add transitions modes into single components with different transitions. A common use would be in Vue Router router-view component.

### Usage 

VueTransitionGroupPlus uses to components. TransitionGroupPlus and TransitionPlus.

The usage of TransitionGroupPlus reflects the api fo React's TransitionGroup. It wraps is children into a html element.

Props:
- **`transition-mode`** (optional)[String]
    - `out-in` _(default)_
    - `in-out`
    - `simultaneous` _There is no need to use VueTransitionGroupPlus if using simultaneous transitions_
- **`tag`** (optional) [String]
    - The html component tag to use. _Default to `span`_

Usage of TransitionPlus is identical to Vue transitions. (See the [guide on vue's website](https://vuejs.org/v2/guide/transitions.html) on how to use Vue transitions).
_It's a functional component_


##### sample:
```js
import VueTransitionGroupPlus from "vue-transition-group-plus"
Vue.use(VueTransitionGroupPlus)

<transition-group-plus transition-mode="in-out" tag="div">
    <transition-plus @enter="onEnter" @leave="onLeave">
        <h4>component</h4>
    </transition-plus>
</TransitionGroupPlus>
```

### License
Licensed under MIT



Inspired by [React TransitionGroupPlus](https://github.com/cheapsteak/react-transition-group-plus)