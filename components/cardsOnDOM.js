import { renderToDOM } from './renderToDOM.js';



export const cardsOnDOM = (gar) => {
  let domStr='';

  for (let i = 0; i < gar.length; i++) {
    domStr += `
    <div class="card">
      <h3>${gar[i].name}</h3>
      <p>${gar[i].email}</p>
      <p>${gar[i].phone}</p>
    </div>
    `;
  }
renderToDOM('#app', domStr);
}
