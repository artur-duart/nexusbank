import { ControllerNegotiation } from './controllers/controller-negotiation.js';
const controller = new ControllerNegotiation();
const form = document.querySelector('.form');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => {
    event.preventDefault();
    controller.add();
});
