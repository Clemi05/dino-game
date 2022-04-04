import { incrementCustomProperty } from "./updateCustomProperty.js";

const SPEED = 0.05;
const groundElements = document.querySelectorAll('[data-ground]');

export function updateGround(delta) {
  groundElements.forEach(ground => {
    incrementCustomProperty(ground, '--left', delta * SPEED * -1);
  })
}
