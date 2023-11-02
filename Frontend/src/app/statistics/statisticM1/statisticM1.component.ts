import { Component } from "@angular/core";
import { StatisticM1 } from "src/app/models/statisticM1.model";
import { StatisticService } from "src/app/services/statistic.service";


@Component({
    selector : 'statisticM1',
    templateUrl : 'statisticM1.component.html',
    styleUrls : ['statisticM1.component.css']
})
export class StatisticM1Component{
     dto! : StatisticM1[] ;
     isLoading : boolean = true;

    constructor(private service: StatisticService ){
        this.service.calculateStatisticM1().subscribe((e) => {
            this.dto = e;
            this.isLoading = false;
        })
    }


}