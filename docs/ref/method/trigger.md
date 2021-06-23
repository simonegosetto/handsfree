# Method: `handsfree.trigger`

```js
handsfree.trigger(target, event, opts)
```

This method is a shortcut to dispatching [KeyboardEvents](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent), [MouseEvents](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent), and [CustomEvents](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent). It is particularly helpful at mapping gestures or events to keyboard keys and mouse buttons. By default, events bubble and are cancellable.

`event` can just be the name of event type of `KeyboardEvents` or `MouseEvents`, for example: `keydown`, `keyup`, `click`, `mousedown`, `mouseup`



## Parameters

target: string | Elements
: The elements to dispatch the event to. Can be a CSS selector or Elements

event: string
: The event type for `KeyboardEvent` or `MouseEvent`, for example: `keydown`, `keyup`, `click`, `mousedown`, `mouseup`. If the passed `event` does not belong to one of those Event Types, then a custom `handsfree-trigger` event will be used.


## Examples

```js
// Send a "w" keydown event to all buttons
handsfree.trigger('button', 'keydown', 'w')

// Right click a CSS selector element
handsfree.trigger('button:first-child', 'click', 1)

// Send a click event that does not bubble
let target = document.querySelector('#target')
handsfree.trigger(target, 'click', {
  bubbles: false
})
```