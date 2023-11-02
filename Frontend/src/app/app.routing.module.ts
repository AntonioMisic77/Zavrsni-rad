import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { StatisticComponent } from "./statistics/statistics.component";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./statistics/home/home.component";
import { StatisticM2 } from "./statistics/statisticM2/statisticM2.component";
import { StatisticM1Component } from "./statistics/statisticM1/statisticM1.component";
import { StatisticM5Component } from "./statistics/statisticM5/statisticM5.component";
import { StatisticM7Component } from "./statistics/statisticM7/statisticM7.component";
import { EmptyStatisticComponent } from "./statistics/emptyStatistic/emptyStatistic.component";


const appRoutes : Routes = 
[
        {
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
        },
        {
            path: 'dashboard',
            component: DashboardComponent
        },
        {
            path: 'statistics',
            component : StatisticComponent,
            children: [
                {
                    path: '',
                    component: HomeComponent
                },
                {
                    path:'m1',
                    component: StatisticM1Component

                },
                {
                    path:'m2',
                    component: StatisticM2
                },
                {
                    path:'m3',
                    component: EmptyStatisticComponent
                },
                {
                    path:'m4',
                    component: EmptyStatisticComponent
                },
                {
                    path:'m5',
                    component: StatisticM5Component
                },
                {
                    path:'m6',
                    component: EmptyStatisticComponent
                },
                {
                    path:'m7',
                    component: StatisticM7Component
                },
                {
                    path:'l1',
                    component: EmptyStatisticComponent
                }
            ]
        }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
