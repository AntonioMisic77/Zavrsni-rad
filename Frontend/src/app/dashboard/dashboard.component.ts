import { Component } from "@angular/core";
import { StatisticService } from "../services/statistic.service";
import { Router } from "@angular/router";

@Component({
    selector : 'app-dashboard',
    templateUrl : './dashboard.component.html',
    styleUrls : ['./dashboard.component.css']
})
export class DashboardComponent{

    constructor(private service: StatisticService,private router:Router){
        
    }

    onSubmit(){
        this.service.submitData();
        
        this.router.navigate(['./statistics']); 
    }

    onLoadExample(){
        this.service.setPdb("Any Pdb")
        this.service.setfilterMethod("Any method");
        this.service.setDistance(7);
        this.service.setCoordinationNumber(1);
        this.service.setRMSD(15);
        this.service.setMetals(['Mg','Zn'])
        this.service.setLingads(['ASP','GLU'])
        this.service.setChainTypes(['Protein','DNA'])

        this.router.navigate(['./statistics'])
    }
}