import { Expose } from 'class-transformer';

export class ApiStockModel {
  [x: string]: any;
  companyService: any;
  constructor(
    companySymbol: string,
    dividendYieldIndicatedAnnual: number,
    netProfitMarginTTM: number,
    roeTTM: number,
  ) {
    this.companySymbol = companySymbol
    this.dividendYieldIndicatedAnnual = dividendYieldIndicatedAnnual;
    this.netProfitMarginTTM = netProfitMarginTTM;
    this.roeTTM = roeTTM;
  }
  @Expose()
  companySymbol: string
  @Expose()
  dividendYieldIndicatedAnnual: number;
  @Expose()
  netProfitMarginTTM: number;
  @Expose()
  roeTTM: number;
}
