import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FashionModelsListComponent } from './fashion-models-list.component';
import { FashionModelsAddComponent } from './fashion-models-add.component';

const routes: Routes = [
    {
        path: '', component: FashionModelsListComponent
    },
    {
        path: 'add', component: FashionModelsAddComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FashionModelsRoutingModule {
}
