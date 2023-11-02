import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { StatisticService } from "src/app/services/statistic.service";


@Component({
    selector : 'app-scope',
    templateUrl : './statisticScope.component.html',
    styleUrls : ['./statisticScope.component.css']
})
export class StatisticScopeComponent implements OnInit,OnDestroy{

    scopeForm! : FormGroup;
    @ViewChild('pdb') pdbInput! : ElementRef<HTMLInputElement>;

    scope : String = "";

    constructor(private service:StatisticService){
        service.submit.subscribe(() => {
            this.service.setPdb(this.scope);
        });
    }

    ngOnDestroy(): void {
        
    }
    ngOnInit(): void {
        this.scopeForm = new FormGroup({
            'scope' : new FormControl(null,[Validators.required])
        });
    }

    onSubmit(){
        if(this.scopeForm.value.scope == "singlePdb"){
            this.scope = this.pdbInput.nativeElement.value;
        } else {
            this.scope = this.scopeForm.value.scope;
        }
    }

    // Validacija singlePdb ne moze biti null
    
}