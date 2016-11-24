# Vue-Draggie

## Intro

A drag & drop plugin for vue. Using the native [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API). 100% **jQuery FREE**.

Before started, I recommend you to check out the [example](https://kelvinleung.github.com/vue-draggie) first.

*FYI*: This is my first open-source project. So, don't take it too serious.

I mean it.

: )

## Usage

### Installation

Use npm to download vue-draggie (Still working on it.):

```
npm install vue-draggie --save
```

Or include `vue-draggie.js` as inline script:

```html
<script src="vue-draggie.js"></script>
```

Then you need to install draggie as a plugin into Vue.

```js
const Vue = require('vue')
const Draggie = require('vue-draggie')

Vue.use(Draggie)
```

### Options

There are a couple of options you can play with. The best practice would be passing a 'config object' to the draggie directive.

```js
let options = {
  effect: 'move',
  start: 'start',
  enter: 'enter'
}

Vue.use(Draggie, options)
```

You can pass an options object to the Vue-Draggie, which contains the following settings:

- `effect`: several operations performed when dragging

- `start`: the start-dragging style applied to the element being dragged

- `enter`: the 'hover' style applied to the element being hovered

#### Effect (optional)

Here's what 'effect' is:

> When dragging, there are several operations that may be performed. The copy operation is used to indicate that the data being dragged will be copied from its present location to the drop location. The move operation is used to indicate that the data being dragged will be moved, and the link operation is used to indicate that some form of relationship or connection will be created between the source and drop locations.

There're 8 effects you can set:

- `'none' (default)`: no operation is permitted

- `'copy'`: copy only

- `'move'`: move only

- `'link'`: link only

- `'copyMove'`: copy or move only

- `'copyLink'`: copy or link only

- `'linkMove'`: link or move only

- `'all'`: copy, move, or link

Check [this]() for more info.

#### Styles (both optional)

There're two styles you can set:

- `start`: the start-dragging style applied to the element being dragged, expecting a string for the CSS class name

- `enter`: the 'hover' style applied to the element being hovered, expecting a string for the CSS class name

Here's an example:

Let's say you have the following CSS selectors:

```css
.start {
  background-color: #000;
}
.enter {
  background-color: #f00;
}
```

And you set them into the Draggie's options:

```js
Vue.use(Draggie, {start: 'start', enter: 'enter'})
```

What you'll get is, when you start dragging, the background color of the element being dragged will change its color to black. When the element is entering/hovering another element, that element's background color will change to red.

### Custom directive

After installing vue-draggie, you can make an element 'draggable' by simply setting the element's `draggable` attribute to `true`:

```html
<div draggable="true"></div>
```

Then add the `v-draggie` directive to that same element.

```html
<div draggable="true" v-draggie="{id: index, swap: swapEls}"></div>
```

You may pass the following arguments as an object to the draggie directive:

### Id (required)

The element's unique id, usually the 'index', which is used for identifying which element is being dragged.

### Swap function (optional)

In order to swap the dragged (source) and dropped (destination) element, you need to apply your own swap function to swap data, style etc. The swap function will be invoked immediately once the dragged element has been dropped.

Your function will get two arguments by default, the dragged element, and the dropped element. Both has two attributes as an object.

`id`: same as the id you pass into the directive

`el`: the DOM element

You can create a function to swap them like this:

```js
let swapEls = function (dragged, dropped) {
  let swapTemp = this.items[dragged.id]
  this.$set(this.items, dragged.id, this.items[dropped.id])
  this.$set(this.items, dropped.id, swapTemp)
}
```

## Todos

- Transition effects

- Draggable & droppable setting

- Nicer docs

## Contribute

I'm just a newbie to JavaScript, welcome to PR me.

: )

## License

Actually I have no idea what to put here.

: (
