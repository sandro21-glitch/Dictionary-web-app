import { getElement } from "./utils.js";

const body = getElement('body')
const select = getElement('#select')

select.addEventListener('change', (e) => {
    const target = e.target.value
    // console.log(target)
    if (target === 'serif') {
        body.style.fontFamily = 'Georgia, serif'
      } else if (target === 'sans') {
        body.style.fontFamily = 'Helvetica, Arial, sans-serif'
      } else if (target === 'mono') {
        body.style.fontFamily = 'Monaco, Consolas, monospace'
      }
})
