import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {SharedModule} from "../shared/shared.module";
import {PortfolioRoutingModule} from "./portfolio-routing.module";


@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule {
}
