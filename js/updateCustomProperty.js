export function getCustomProperty(elem, prop) {
  /* Get the CSS var, get the CSS property, and convert it to a num */
  return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0
}

export function setCustomProperty(elem, prop, value) {
  elem.style.setProperty(prop, value)
}

export function incrementCustomProperty(elem, prop, inc) {
  setCustomProperty(elem, prop, getCustomProperty(elem, prop) + inc)
}
