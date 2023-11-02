import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { StatisticService } from "src/app/services/statistic.service";

@Component({
    selector : 'app-chains',
    templateUrl : './chains.component.html',
    styleUrls : ['./chains.component.css']
})
export class ChainsComponent implements OnInit{
    
    public chainTypes = [
        'Protein',
        'DNA',
        'RNA',
        'Water',
        'Other'
    ]

    chainForm! : FormGroup;
    formArray! : FormArray;

    constructor(private statistic:StatisticService){
        this.statistic.submit.subscribe(() => {
            this.statistic.setChainTypes(this.chainForm.value.chains);
        })

    }
    ngOnInit(): void {
        this.chainForm = new FormGroup({
            'chains' : new FormArray([],Validators.required)
        })

        this.formArray = this.chainForm.get('chains') as FormArray;
    }

    onSubmit(){
        console.log(this.chainForm.value.chains)
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

}