import { Expose } from 'class-transformer';

export class ApiStockModel {
  constructor(
    dividendYieldIndicatedAnnual: number,
    netProfitMarginTTM: number,
    roeTTM: number,
  ) {
    this.dividendYieldIndicatedAnnual = dividendYieldIndicatedAnnual;
    this.netProfitMarginTTM = netProfitMarginTTM;
    this.roeTTM = roeTTM;
  }
  @Expose()
  dividendYieldIndicatedAnnual: number;
  @Expose()
  netProfitMarginTTM: number;
  @Expose()
  roeTTM: number;
}
