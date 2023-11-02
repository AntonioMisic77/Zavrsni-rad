import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { StatisticService } from "src/app/services/statistic.service";

@Component({
    selector : 'app-ligands',
    templateUrl : 'lingads.component.html',
    styleUrls : ['lingads.component.css']
})
export class LingadsComponent implements OnInit{

    public lingads = [
        [
            {name:'ALA',checked:false,isAminoAcid:true},
            {name:'GLU',checked:false,isAminoAcid:true},
            {name:'LEU',checked:false,isAminoAcid:true},
            {name:'SER',checked:false,isAminoAcid:true},
            {name:'DA',checked:false,isAminoAcid:false},
            {name:'A',checked:false,isAminoAcid:false},
            {name:'WATER',checked:false,isAminoAcid:false}
        ],
        [
            {name:'ARG',checked:false,isAminoAcid:true},
            {name:'GLN',checked:false,isAminoAcid:true},
            {name:'LYS',checked:false,isAminoAcid:true},
            {name:'THR',checked:false,isAminoAcid:true},
            {name:'DG',checked:false,isAminoAcid:false},
            {name:'G',checked:false,isAminoAcid:false},
            {name:'OTHER',checked:false,isAminoAcid:false}
        ],
        [
            {name:'ASN',checked:false,isAminoAcid:true},
            {name:'GLY',checked:false,isAminoAcid:true},
            {name:'MET',checked:false,isAminoAcid:true},
            {name:'TRP',checked:false,isAminoAcid:true},
            {name:'DC',checked:false,isAminoAcid:false},
            {name:'C',checked:false,isAminoAcid:false}
        ],
        [
            {name:'ASP',checked:false,isAminoAcid:true},
            {name:'HIS',checked:false,isAminoAcid:true},
            {name:'PHE',checked:false,isAminoAcid:true},
            {name:'TYR',checked:false,isAminoAcid:true},
            {name:'DT',checked:false,isAminoAcid:false},
            {name:'U',checked:false,isAminoAcid:false}
        ]

    ]

    lingadsForm! : FormGroup;
    formArray! : FormArray;

    constructor(private service:StatisticService){
          this.service.submit.subscribe(() =>{
                this.service.setLingads(this.lingadsForm.value.lingads);
          })
    }
    ngOnInit(): void {
        this.lingadsForm = new FormGroup({
            'lingads' : new FormArray([],Validators.required)
        });

        this.formArray = this.lingadsForm.get('lingads') as FormArray;
    }


    onSubmit(){
        console.log(this.lingadsForm.value.lingads);
    }

    onChange(event:any){
        if(event.target.checked){
            this.formArray.push(new FormControl(event.target.value));
        } else {
            let x: number = 0;

            this.formArray.controls.forEach((control: AbstractControl) => {
                if(control.value == event.target.value){
                    this.formArray.removeAt(x);
                    return;
                }

                x++;
            });
        }
    }

    public onToogleAA(){
        this.lingads.forEach((lingadList) => {
            lingadList.forEach((lingad) =>{
                if(lingad.isAminoAcid == true){
                    lingad.checked = !lingad.checked;
                    this.formArray.push(new FormControl(lingad.name));
                }
            })
        });
    }

    public onToogleNA(){
        this.lingads.forEach((lingadList => {
            lingadList.forEach((lingad) => {
                if (lingad.isAminoAcid == false && (lingad.name != 'WATER' && lingad.name != 'OTHER')){
                    lingad.checked = !lingad.checked;
                    this.formArray.push(new FormControl(lingad.name));
                }
            })
        }))
    }

    
    // Ne radi  UNCheck za AA I NA
}