# overlayscrollbars-vue

The OverlayScrollbars wrapper for Vue3.

<h6>
    <a href="https://github.com/vuejs/vue"><img src="https://img.shields.io/badge/Vue-%5E3.2.0-41B883?style=flat-square&logo=vue.js" alt="Vue"></a>
    <a href="https://github.com/KingSora/OverlayScrollbars"><img src="https://img.shields.io/badge/OverlayScrollbars-%5E1.10.0-36befd?style=flat-square" alt="OverlayScrollbars"></a>
</h6>

## Installation
```sh
npm install @codeporter/overlayscrollbars-vue
```

## Peer Dependencies

OverlayScrollbars for Vue3 has the following **peer dependencies**:

- The JavaScript library: [overlayscrollbars](https://www.npmjs.com/package/overlayscrollbars) 

```
npm install overlayscrollbars
```

- The Vue3 framework: [vue](https://www.npmjs.com/package/vue)

```
npm install vue
```

## TypeScript

- In case you are using TypeScript, you have to install the [OverlayScrollbars typings](https://www.npmjs.com/package/@types/overlayscrollbars):

```
npm install @types/overlayscrollbars
```

Since this wrapper is written in TypeScript it comes with its generated typings.

Check out the [recommended](https://github.com/KingSora/OverlayScrollbars#typescript) **tsconfig.json** options.

## Usage

### CSS

You have to import the `OverlayScrollbars.css` by yourself. The component **doesn't** do it for you as the styles are **global styles**!

```js
import 'overlayscrollbars/css/OverlayScrollbars.css';
```

### Import

Register global component:

```js
import { createApp } from 'vue';
import App from './App.vue';
import { OverlayScrollbars } from ' @codeporter/overlayscrollbars-vue';
import 'overlayscrollbars/css/OverlayScrollbars.css';

const app = createApp(App)
app.use(OverlayScrollbars)
app.mount('#app')
```

Register local component:

```js
<script setup lang="ts">
import { OverlayScrollbars } from ' @codeporter/overlayscrollbars-vue';
import 'overlayscrollbars/css/OverlayScrollbars.css';
</script>
```
or

```js
<script lang="ts">
import { defineComponent } from 'vue';
import { OverlayScrollbars } from ' @codeporter/overlayscrollbars-vue';
import 'overlayscrollbars/css/OverlayScrollbars.css';

export default defineComponent({
  components: {
    OverlayScrollbars
  }
})
</script>
```

### Template

After the registration you can use it in templates like:

```html
<overlay-scrollbars>
  example content
</overlay-scrollbars>
```

The default selector is `overlay-scrollbars`, but in case you register it manually you can choose it by yourself.

### Properties

| Property    | Type                            | Default | Description                                                    |
| ----------- | :------------------------------ | :------ | :------------------------------------------------------------- | 
| options     | object                          | -       | can be changed at any point in time, and the plugin will adapt |
| extensions  | string / array<string> / object | -       |  only taken into account if the component gets mounted         |

```html
<overlay-scrollbars 
  :options="{ scrollbars: { autoHide: 'scroll' } }" 
  :extensions="['extensionA', 'extensionB']"
>
</overlay-scrollbars>
```

You can read more about the `options` object [here](https://kingsora.github.io/OverlayScrollbars/#!documentation/options), `extensions` are documented [here](https://kingsora.github.io/OverlayScrollbars/#!documentation/extensions-basics) and [here](https://kingsora.github.io/OverlayScrollbars/#!documentation/initialization).

### Instance

If you get the component reference, it exposes the OverlayScrollbars `instance` of the component, or `null` if the instance isn't initialized yet or already destroyed.

```js
<script setup>
import { ref } from 'vue'
const scrollbar = ref(null)

const scollTo = () => {
  scrollbar.value?.instance?.scroll([0, '100%'], 400)
}
</script>
```

```html
<template>
  <overlay-scrollbars ref="scrollbar"></overlay-scrollbars>
</template>
```

## License

[MIT](./LICENSE)