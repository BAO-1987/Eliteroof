import './functions/_pageHeight';
import './functions/_headerHeight';
import Accordion from './functions/_accordion.js';
[...document.querySelectorAll('details')].forEach(el => {
  new Accordion(el);
});

