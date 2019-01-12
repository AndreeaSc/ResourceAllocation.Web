import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FashionModelsListComponent } from './fashion-models-list.component';
import { FashionModelsAddComponent } from './fashion-models-add.component';
import { FashionModelsDetailsComponent } from './fashion-models-details.component';
import { FashionModelsEditComponent } from './fashion-models-edit.component';
import { FashionModelsDeleteComponent } from './fashion-models-delete.component';

const routes: Routes = [
    {
        path: '', component: FashionModelsListComponent
    },
    {
        path: 'add', component: FashionModelsAddComponent
    },
    {
        path: 'details', component: FashionModelsDetailsComponent
    },
    {
        path: 'edit', component: FashionModelsEditComponent
    },
    {
        path: 'delete', component: FashionModelsDeleteComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FashionModelsRoutingModule {
}
