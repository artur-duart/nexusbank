import { Negotiations } from '../models/negotations.js';
import { Negotiation } from './../models/negotiation.js';

export class ControllerNegotiation {
	private dateInput: HTMLInputElement;
	private amountInput: HTMLInputElement;
	private valueInput: HTMLInputElement;
	private negotiations: Negotiations = new Negotiations();

	constructor() {
		this.dateInput = document.querySelector('#data') as HTMLInputElement;
		this.amountInput = document.querySelector(
			'#quantidade'
		) as HTMLInputElement;
		this.valueInput = document.querySelector('#valor') as HTMLInputElement;
	}

	add(): void {
		const negotiation = this.createNegotiation();
		this.negotiations.add(negotiation);
		console.log(this.negotiations.list());
		this.clearForm();
	}

	createNegotiation(): Negotiation {
		const regex = /-/g;
		const date = new Date(this.dateInput.value.replace(regex, ','));
		const amount = parseInt(this.amountInput.value);
		const value = parseInt(this.valueInput.value);
		return new Negotiation(date, amount, value);
	}

	clearForm(): void {
		this.dateInput.value = '';
		this.amountInput.value = '';
		this.valueInput.value = '';
		this.dateInput.focus();
	}
}
