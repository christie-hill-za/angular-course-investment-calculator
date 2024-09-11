import { Injectable } from "@angular/core";
import { Investment } from "./investment.model";
import { InvestmentInput } from "./investment-input.model";

@Injectable({
  providedIn: 'root'
})
export class InvestmentsService {
  investmentData: Investment[] = [];

  calculateInvestment(investmentInputData: InvestmentInput) {
    let investmentValue = investmentInputData.initialInvestment;

    for (let i = 0; i < investmentInputData.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (investmentInputData.expectedReturn / 100);
      investmentValue += interestEarnedInYear + investmentInputData.annualInvestment;
      const totalInterest = investmentValue - investmentInputData.annualInvestment * year - investmentInputData.initialInvestment;

      this.investmentData.push({
        year: year,
        annualInterest: interestEarnedInYear,
        investmentValue: investmentValue,
        totalInterest: totalInterest,
        investedCapital: investmentInputData.initialInvestment + investmentInputData.annualInvestment * year,
      });
    }
  }
}
