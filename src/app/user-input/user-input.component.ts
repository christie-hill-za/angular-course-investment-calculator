import { Component, signal } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {InvestmentsService} from "../investments.service";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestmentInput = signal('');
  annualInvestmentInput = signal('');
  expectedReturnInput = signal('');
  durationInput = signal('');

  constructor(private investmentsService: InvestmentsService) {
  }

  onCalculate() {
    this.investmentsService.calculateInvestment({
      initialInvestment: +this.initialInvestmentInput(),
      annualInvestment: +this.annualInvestmentInput(),
      expectedReturn: +this.expectedReturnInput(),
      duration: +this.durationInput(),
    });

    this.initialInvestmentInput.set('');
    this.annualInvestmentInput.set('');
    this.expectedReturnInput.set('');
    this.durationInput.set('');
  }
}
