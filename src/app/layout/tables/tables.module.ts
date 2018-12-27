import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';
import { ServicesModule } from 'src/app/shared/services/services.module';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule, ServicesModule],
    declarations: [TablesComponent]
})
export class TablesModule {}
