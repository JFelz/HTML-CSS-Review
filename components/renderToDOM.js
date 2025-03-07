export const renderToDOM = (divId, newComp) => {
  const appDiv = document.querySelector(divId);
  appDiv.innerHTML = newComp; 
};
