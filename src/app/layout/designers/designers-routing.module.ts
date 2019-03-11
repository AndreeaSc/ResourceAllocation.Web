import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignersListComponent } from './designers-list.component';
import { DesignersAddComponent } from './designers-add.component';
import { DesignersEditComponent } from './designers-edit.component';
import { DesignersDeleteComponent } from './designers-delete.component';

const routes: Routes = [
    {
        path: '', component: DesignersListComponent
    },
     {
         path: 'add', component: DesignersAddComponent
     },
     {
        path: 'edit', component: DesignersEditComponent
    },
    {
        path: 'delete', component: DesignersDeleteComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DesignersRoutingModule {
}
