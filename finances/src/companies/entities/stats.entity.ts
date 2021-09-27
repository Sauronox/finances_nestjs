export class Stats {
  roeTTM: number;
  yield: number;
  netProfitMarginTTM: number;

  constructor(
    roeTTM: number,
    yield_cons: number,
    netProfitMarginTTM: number,
  ) {
    this.roeTTM = roeTTM;
    this.yield = yield_cons;
    this.netProfitMarginTTM = netProfitMarginTTM;
  }
}
