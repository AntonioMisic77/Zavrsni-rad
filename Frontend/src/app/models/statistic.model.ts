export class Statistic{

    public pdb!: String;
    public method!: String;
    public distance!: number;
    public coordNumber!: number;
    public RMSD!: number;
    public metals!: String[];
    public lingads!: String[];
    public chainTypes!: String[];

    constructor(pdb:String){
        this.pdb = pdb;
    }   
}