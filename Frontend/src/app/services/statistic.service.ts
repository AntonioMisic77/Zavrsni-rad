import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, catchError, throwError } from "rxjs";
import { Statistic } from "../models/statistic.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { StatisticM1 } from "../models/statisticM1.model";
import { StatisticM5 } from "../models/statisticM5.model";
import { StatisticM7 } from "../models/statisticM7.model";

@Injectable({
    providedIn : 'root'
})
export class StatisticService{

    submit = new Subject<void>();
    statisticDto : Statistic = new Statistic("ivo");

    constructor(private http:HttpClient){}

    calculateStatisticM2(){
       return this.http.post<number>("https://localhost:7032/api/Statistic/m2",this.statisticDto)
                  .pipe(catchError(this.handleError));      
    }

    calculateStatisticM1(){
        return this.http.post<StatisticM1[]>("https://localhost:7032/api/Statistic/m1",this.statisticDto)
                  .pipe(catchError(this.handleError));  
    }

    calculateStatisticM5(){
        return this.http.post<StatisticM5[]>("https://localhost:7032/api/Statistic/m5",this.statisticDto)
                  .pipe(catchError(this.handleError));
    }

    calculateStatisticM7(){
        return this.http.post<StatisticM7[]>("https://localhost:7032/api/Statistic/m7",this.statisticDto)
        .pipe(catchError(this.handleError));
    }

    submitData(){
        this.submit.next();
    }

    setPdb(pdb:String){
        this.statisticDto.pdb = pdb;
    }

    setfilterMethod(method:String){
        this.statisticDto.method = method;
    }

    setDistance(distance:number){
        this.statisticDto.distance = distance;
    }

    setCoordinationNumber(coordNumber:number){
        this.statisticDto.coordNumber = coordNumber;
    }

    setRMSD(rmsd:number){
        this.statisticDto.RMSD = rmsd;
    }

    setMetals(metals:String[]){
        this.statisticDto.metals = metals;
    }

    setLingads(lingads:String[]){
        this.statisticDto.lingads = lingads;
    }

    setChainTypes(chainTypes:String[]){
        this.statisticDto.chainTypes = chainTypes;
    }

    getDto(){
        return this.statisticDto;
    }

    private handleError(errorResponse: HttpErrorResponse){

        if(!errorResponse.error){
             let errorMessage = 'An unknow error has ocured!'
            return throwError( () => {return errorResponse.error.Message})
        }

        return throwError(() => { return errorResponse.error.Message})
        
    }
}