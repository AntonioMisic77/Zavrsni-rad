import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { StatisticService } from "src/app/services/statistic.service";


@Component({
    selector: 'app-geometry',
    templateUrl : 'geometry.component.html',
    styleUrls : ['geometry.component.css']
})
export class GeometryComponent implements OnInit{

    geometryForm! : FormGroup;

    ngOnInit(): void {
        this.geometryForm = new FormGroup({
            'distance' : new FormControl(7,[Validators.required,Validators.min(0),Validators.max(7)]),
            'cordNumber' : new FormControl(1,[Validators.required]),
            'RMSD' : new FormControl(15,[Validators.required])
        });
    }

    constructor(private statistic:StatisticService){
        this.statistic.submit.subscribe(() => {
            this.statistic.setDistance(this.geometryForm.value.distance);
            this.statistic.setCoordinationNumber(this.geometryForm.value.cordNumber);
            this.statistic.setRMSD(this.geometryForm.value.RMSD);
        })
    }

    onSubmit(){
        console.log(this.geometryForm.value.distance);
        console.log(this.geometryForm.value.cordNumber);
        console.log(this.geometryForm.value.RMSD);
    }


}