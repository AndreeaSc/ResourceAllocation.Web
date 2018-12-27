import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FashionModelsListComponent } from './fashion-models-list.component';
import { FashionModelsRoutingModule } from './fashion-models-routing.module';
import { ServicesModule } from 'src/app/shared/services/services.module';
import { FashionModelsAddComponent } from './fashion-models-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FashionModelsRoutingModule,
        ServicesModule,
        FormsModule
    ],
    declarations: [
        FashionModelsListComponent,
        FashionModelsAddComponent
    ],
    exports: [
        FashionModelsListComponent,
        FashionModelsAddComponent
    ]
})
export class FashionModelsModule {}
