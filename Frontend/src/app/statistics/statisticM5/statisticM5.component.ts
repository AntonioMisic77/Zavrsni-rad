import { Component, OnInit } from "@angular/core";
import { StatisticM5 } from "src/app/models/statisticM5.model";
import { StatisticService } from "src/app/services/statistic.service";


@Component({
    selector : 'statm5',
    templateUrl : 'statisticM5.component.html',
    styleUrls : ['statisticM5.component.css']
})
export class StatisticM5Component implements OnInit{

    dto!: StatisticM5[];
    isLoading : boolean = true;
    constructor(private service: StatisticService){}


    ngOnInit(): void {
       this.service.calculateStatisticM5().subscribe(r => {
           this.dto = r;
           this.isLoading = false;
       })
    }
}