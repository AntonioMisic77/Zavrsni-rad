import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { StatisticService } from "src/app/services/statistic.service";


@Component({
    selector: 'app-filter',
    templateUrl: './methodFilter.component.html',
    styleUrls : ['./methodFilter.component.css']
})
export class MethodFilterComponent implements OnInit{

    filterForm! : FormGroup;
    @ViewChild('resolution') resolutionInput! : ElementRef<HTMLInputElement>;
    filter : String = "";
    ngOnInit(): void {
       this.filterForm = new FormGroup({
            'filter' : new FormControl(null,Validators.required)
       });
    }

    constructor(private service:StatisticService){
        this.service.submit.subscribe(() => {
            this.service.setfilterMethod(this.filter);
        })
    }
    onSubmit(){

        if(this.filterForm.value.filter == "XRAY"){
            this.filter = this.resolutionInput.nativeElement.value;
        } else {
            this.filter = this.filterForm.value.filter;
        }
    }

    // Validacija resolution ne smije biti null niti negativan broj
    
}