

export class StatisticM7{
    public atom1Name: string;
    public atom2Name: string;
    public count : number;
    public avg : number;
    public stdev : number;

    constructor(public Atom1Name: string,public Atom2Name:string,public Count:number,public AVG:number,public Stdev:number){
        this.atom1Name = Atom1Name;
        this.atom2Name = Atom2Name;
        this.count = Count;
        this.avg = AVG;
        this.stdev = Stdev;
    }
}