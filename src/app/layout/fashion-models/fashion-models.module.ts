import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FashionModelsListComponent } from './fashion-models-list.component';
import { FashionModelsRoutingModule } from './fashion-models-routing.module';
import { ServicesModule } from 'src/app/shared/services/services.module';
import { FashionModelsAddComponent } from './fashion-models-add.component';
import { FormsModule } from '@angular/forms';
import { FashionModelsDetailsComponent } from './fashion-models-details.component';
import { FashionModelsEditComponent } from './fashion-models-edit.component';

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
        FashionModelsAddComponent,
        FashionModelsDetailsComponent,
        FashionModelsEditComponent
    ],
    exports: [
        FashionModelsListComponent,
        FashionModelsAddComponent,
        FashionModelsDetailsComponent,
        FashionModelsEditComponent
    ]
})
export class FashionModelsModule {}
