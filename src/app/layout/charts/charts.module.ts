import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { PageHeaderModule } from '../../shared';
import { ServicesModule } from 'src/app/shared/services/services.module';

@NgModule({
    imports: [
        CommonModule,
        Ng2Charts,
        ChartsRoutingModule,
        PageHeaderModule,
        ServicesModule,
    ],
    declarations: [
        ChartsComponent
    ]
})
export class ChartsModule {}
