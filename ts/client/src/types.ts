import { BN } from '@project-serum/anchor';

export class FlashLoanWithdraw {
  static index: number;
  static amount: BN;
}

export class FlashLoanType {
  static unknown = { unknown: {} };
  static swap = { swap: {} };
}

export class InterestRateParams {
  util0: number;
  rate0: number;
  util1: number;
  rate1: number;
  maxRate: number;
  adjustmentFactor: number;
}
