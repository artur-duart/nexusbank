import { Negotiation } from './../models/negotiation.js';
export class ControllerNegotiation {
    constructor() {
        this.dateInput = document.querySelector('#data');
        this.amountInput = document.querySelector('#quantidade');
        this.valueInput = document.querySelector('#valor');
    }
    add() {
        const negotiation = this.createNegotiation();
        console.log(negotiation);
        this.clearForm();
    }
    createNegotiation() {
        const regex = /-/g;
        const date = new Date(this.dateInput.value.replace(regex, ','));
        const amount = parseInt(this.amountInput.value);
        const value = parseInt(this.valueInput.value);
        return new Negotiation(date, amount, value);
    }
    clearForm() {
        this.dateInput.value = '';
        this.amountInput.value = '';
        this.valueInput.value = '';
        this.dateInput.focus();
    }
}
