import { incrementCustomProperty } from "./updateCustomProperty.js";


const groundElements = document.querySelectorAll('[data-ground]');

export function updateGround(delta) {
  groundElements.forEach(ground => {
    incrementCustomProperty()
  })
}
