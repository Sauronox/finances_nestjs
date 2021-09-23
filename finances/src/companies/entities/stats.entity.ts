export class Stats{
    roeTTM: number;
    ebitdPerShareTTM: number;
    netProfitMarginTTM: number;

    constructor(roeTTM: number, ebitdPerShareTTM: number, netProfitMarginTTM: number){
        this.roeTTM = roeTTM;
        this.ebitdPerShareTTM = ebitdPerShareTTM;
        this.netProfitMarginTTM = netProfitMarginTTM;
    }  
}