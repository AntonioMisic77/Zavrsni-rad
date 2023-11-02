import { Component, OnInit } from "@angular/core";
import { StatisticM7 } from "src/app/models/statisticM7.model";
import { StatisticService } from "src/app/services/statistic.service";

@Component({
    selector : 'statisticM7',
    templateUrl : 'statisticM7.component.html'
})

export class StatisticM7Component implements OnInit{

    dto! : StatisticM7[]
    isLoading : boolean = true;

    constructor(private service:StatisticService){}

    ngOnInit(): void {
        this.service.calculateStatisticM7().subscribe(r => {
            this.dto = r;
            this.isLoading = false;
        })
    }

}