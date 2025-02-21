import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { getPokemon } from './pokemon.ts'
import { isBalanced } from './task/isBalanced.ts'
import { generatePrimes } from './task/generatePrimes.ts'

console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("{[(])}")); // false
console.log(isBalanced("{{[[(())]]}}")); // true

console.log(generatePrimes(10)); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

async function getSomePokemon(id: number) {
  const res = await getPokemon(id)
  console.log(res)
  
}

getSomePokemon(1)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
