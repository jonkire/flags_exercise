import flags from './model/flags.js';

const main = document.querySelector('main');

function modelFlag(flag) {
  return `
  <div class="flag col-2 my-2 text-center">
    <img src="${flag.image}" alt="Andorra">
    <p>${flag.name}</p>
  </div>
  `;
}

for (const flag of flags) {
  const f = modelFlag(flag);
  main.insertAdjacentHTML('beforeend', f);
}