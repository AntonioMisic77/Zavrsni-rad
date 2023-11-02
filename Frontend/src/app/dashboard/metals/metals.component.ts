import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { StatisticService } from "src/app/services/statistic.service";


@Component({
    selector: 'app-metals',
    templateUrl: './metals.component.html',
    styleUrls: ['./metals.component.css']
})
export class MetalsComponent implements OnInit{

    public metals = [
        [
            {name: 'Mg',checked: false},
            {name: 'Mn',checked: false},
            {name: 'Ni',checked: false},
            {name: 'Mo',checked: false},
            {name: 'Pt',checked: false}
        ],
        [
            {name: 'Ca',checked: false},
            {name: 'Pb',checked: false},
            {name: 'Hg',checked: false},
            {name: 'Ba',checked: false},
            {name: 'K',checked: false}
        ],
        [
            {name: 'Zn',checked: false},
            {name: 'Sr',checked: false},
            {name: 'Co',checked: false},
            {name: 'Al',checked: false},
            {name: 'V',checked: false}
        ],
        [
            {name: 'Fe',checked: false},
            {name: 'Cu',checked: false},
            {name: 'W',checked: false},
            {name: 'Tl',checked: false},
            {name: 'Yb',checked: false}
        ],    
        [
            {name: 'Na',checked: false},
            {name: 'Cd',checked: false},
            {name: 'Os',checked: false},
            {name: 'Au',checked: false},
            {name: 'Sm',checked: false}
        ],
        
    ]

    metalsForm! : FormGroup;
    formArray! : FormArray;
    toogle : boolean = false;
    
    constructor(private statistic:StatisticService){
        this.statistic.submit.subscribe(() => {
            this.statistic.setMetals(this.metalsForm.value.metals);
        })
    }

    ngOnInit(): void {
        this.metalsForm = new FormGroup({
            'metals' : new FormArray([],Validators.required)
        })

        this.formArray = this.metalsForm.get('metals') as FormArray;
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

    onSubmit(){
        console.log(this.metalsForm.value.metals)
    }

    onToogle(){
        let x:number = 0;
        this.metals.forEach((element) => {
            element.forEach((e) => {
                if (e.checked == false && !this.formArray.controls[x]){
                    this.formArray.push(new FormControl(e.name));
                } 
                e.checked = !e.checked;
                x++;
            })
        });
        this.toogle = !this.toogle;

        if(this.toogle == false){
            let i:number = 0;
            this.formArray.controls.forEach(element => {
                while(this.formArray.length !== 0){
                    this.formArray.removeAt(0);
                }
            });
        }
    }
}