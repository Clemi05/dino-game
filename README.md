# Dino Game

Copycast of the Google Dino game in Javascript

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Links

- Live Site URL: [Click here to see live site](https://clemi05.github.io/dino-game)
- Repository URL: [Click here to see repository](https://github.com/Clemi05/dino-game)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- JavaScript Modules

### What I learned

In this project, I leaned about the method window.requestAnimationFrame():

```js
function handleStart() {
  lastTime = null;
  speedScale = 1;
  score = 1;
  setupGround();
  setupDino();
  setupCactus();
  startScreenElement.classList.add("hide");
  window.requestAnimationFrame(update);
}
```
I learned about the function parseFloat(), and the two methods getComputedStyle() and getPropertyValue():

```js
export function getCustomProperty(elem, prop) {
  return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0
}
```

I learned about the KeyboardEvent.code property:

```js
function onJump(event) {
  if (event.code !== "Space" || isJumping) return

  yVelocity = JUMP_SPEED;
  isJumping = true;
}
```

I learned about the HTMLElement.dataset property:

```js
function createCactus() {
  const cactus = document.createElement("img");
  cactus.dataset.cactus = true;
  cactus.src = "images/cactus.png";
  cactus.classList.add("cactus");
  setCustomProperty(cactus, "--left", 100);
  worldElement.append(cactus);
}
```
I learned about the Spread syntax (...) and the method Element.getBoundingClientRect():

```js
export function getCactusRects() {
  return [...document.querySelectorAll("[data-cactus]")].map(cactus => {
    return cactus.getBoundingClientRect();
  })
}
```
I learned about the Array.prototype.some() method:

```js
function checkLose() {
  const dinoRect = getDinoRect();
  return getCactusRects().some(rect => isCollision(rect, dinoRect));
}
```

I learned about the user-select CSS property:

```css
*, ::before, ::after {
  box-sizing: border-box;
  user-select: none;
}
```

### Continued development

Following this project, I will continue working on small JavaScript projects to exercise my self and improve my JavaScript and CSS skills. I am also going to learn more about React throught courses and projects.

### Useful resources

- [How To Create Your First Game - JavaScript](https://www.youtube.com/watch?v=47eXVRJKdkU)
- [MDN - Window.requestAnimationFrame()](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [MDN - Window.getComputedStyle()](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)
- [MDN - parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)
- [MDN - CSSStyleDeclaration.getPropertyValue()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- [MDN - CSSStyleDeclaration.setProperty()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty)
- [MDN - KeyboardEvent.code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code)
- [MDN - HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
- [MDN - Spread syntax (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN - Element.getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
- [MDN - Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)


## Author

- Github - [Clemi05](https://github.com/Clemi05)
- LinkedIn - [Clément Azalbert](https://www.linkedin.com/in/clement-azalbert/)
