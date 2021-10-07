import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import {LayoutComponent} from "../../component/layout/layout.component";
import {NavbarComponent} from "../../component/blocks/navbar/navbar.component";
import {FooterComponent} from "../../component/blocks/footer/footer.component";
import {ListCcdvComponent} from "../../component/user/CCDV/list-ccdv/list-ccdv.component";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    ListCcdvComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgxPaginationModule,
  ]
})
export class LayoutModule { }
