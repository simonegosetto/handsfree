/**
 * Setup Handsfree
 */
handsfree = new Handsfree({
  isClient: true,
  weboji: true
})
handsfree.enablePlugins('browser')

/**
 * Handle messages from background script
 */
chrome.runtime.onMessage.addListener(function (message) {
  switch (message.action) {
    case 'handsfree-data':
      handsfree.runPlugins(message.data)
      return
  }
})
