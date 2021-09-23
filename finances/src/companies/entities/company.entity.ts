import { Stats } from "./stats.entity";

export class Company {
    companySymbol: string;
    name: string;
    stats: Stats;

    constructor(companySymbol: string, name: string, stats: Stats){
        this.companySymbol = companySymbol;
        this.name = name;
        this.stats = stats;
    }
}   
