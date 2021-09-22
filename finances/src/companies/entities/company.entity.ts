import { Stats } from "./stats.entity";

export class Company {
    id: string;
    name: string;
    stats: any;

    constructor(id: string, name: string, stats: Stats){
        this.id = id;
        this.name = name;
        this.stats = stats;
    }
}   
