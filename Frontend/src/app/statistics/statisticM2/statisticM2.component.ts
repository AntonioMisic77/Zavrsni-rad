import { Component, OnInit } from "@angular/core";
import { Statistic } from "src/app/models/statistic.model";
import { StatisticService } from "src/app/services/statistic.service";


@Component({
    selector: 'statisticM2',
    templateUrl : 'statisticM2.component.html',
    styleUrls : ['statisticM2.component.css'],
})
export class StatisticM2 implements OnInit{

    dto: Statistic = new Statistic("bla");
    counter : number = 0;
    isLoading : boolean = true;
    constructor(private service:StatisticService){
    }

    ngOnInit(): void {

      this.dto = this.service.getDto();
      this.service.calculateStatisticM2().subscribe((r) => {
            this.counter = r;
            this.isLoading = false;
       });
    }
    
}