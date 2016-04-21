'use strict'

var window = require('global/window')

module.exports = function scrollPosition (element) {
  if (!element || element === window) {
    return {
      x: window.scrollX,
      y: window.scrollY,
      height: window.innerHeight,
      width: window.innerWidth
    }
  }

  return {
    x: element.scrollLeft,
    y: element.scrollTop,
    width: element.scrollWidth,
    height: element.scrollHeight
  }
}
