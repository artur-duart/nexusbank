import { ControllerNegotiation } from './controllers/controller-negotiation.js';


const controller = new ControllerNegotiation();
const form = document.querySelector('.form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  controller.add();
})
