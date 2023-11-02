import { Component, OnInit } from "@angular/core";
import { StatisticService } from "../services/statistic.service";


@Component({
    selector : 'app-statistics',
    templateUrl : './statistics.component.html',
    styleUrls : ['./statistics.component.css']
})
export class StatisticComponent implements OnInit{

    constructor(private service:StatisticService){}


    ngOnInit(): void {
        console.log(this.service.getDto())
    }
}