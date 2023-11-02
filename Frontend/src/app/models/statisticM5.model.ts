
export class StatisticM5{

    public atom1Name: string;
    public atom2Name: string;
    public count : number;

    constructor(public atomName1: string,public atomName2: string, public Count:number){
        this.atom1Name = atomName1;
        this.atom2Name = atomName2;
        this.count = Count;
    }
}