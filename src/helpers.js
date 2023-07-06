'use strict';

export const clear = (parent) => {
  parent.innerHTML = '';
};

export const render = (markup, parent, pos = 'afterbegin') => {
  parent.insertAdjacentHTML(pos, markup);
};
