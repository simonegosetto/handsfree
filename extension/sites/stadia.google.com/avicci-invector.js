/**
 * Setup Handsfree
 */
handsfree.enablePlugins('browser')
handsfree.update({
  hands: false,
  weboji: true
})

/**
 * Controls
 */
handsfree.use('avicciInvector', ({weboji}) => {
  if (!weboji) return

  // D (spin right)
  if (weboji.rotation[2] > Math.PI / 4) {
    document.body.dispatchEvent(new KeyboardEvent('keydown', {
      bubbles : true,
      cancelable : true,
      code: 'KeyD',
      keyCode : 68
    }))
  } else {
    document.body.dispatchEvent(new KeyboardEvent('keyup', {
      bubbles : true,
      cancelable : true,
      code: 'KeyD',
      keyCode : 68
    }))    
  }

  // A (spin left)
  if (weboji.rotation[2] > -Math.PI / 4) {
    document.body.dispatchEvent(new KeyboardEvent('keydown', {
      bubbles : true,
      cancelable : true,
      code: 'KeyA',
      keyCode : 65
    }))
  } else {
    document.body.dispatchEvent(new KeyboardEvent('keyup', {
      bubbles : true,
      cancelable : true,
      code: 'KeyA',
      keyCode : 65
    }))    
  }

  // Up Arrow
  if (weboji.rotation[1] > Math.PI / 4) {
    document.body.dispatchEvent(new KeyboardEvent('keydown', {
      bubbles : true,
      cancelable : true,
      code: 'ArrowUp',
      keyCode : 38
    }))
  } else {
    document.body.dispatchEvent(new KeyboardEvent('keyup', {
      bubbles : true,
      cancelable : true,
      code: 'ArrowUp',
      keyCode : 38
    }))    
  }

  // Down Arrow
  if (weboji.rotation[1] > -Math.PI / 4) {
    document.body.dispatchEvent(new KeyboardEvent('keydown', {
      bubbles : true,
      cancelable : true,
      code: 'ArrowDown',
      keyCode : 40
    }))
  } else {
    document.body.dispatchEvent(new KeyboardEvent('keyup', {
      bubbles : true,
      cancelable : true,
      code: 'ArrowUp',
      keyCode : 38
    }))    
  }
})