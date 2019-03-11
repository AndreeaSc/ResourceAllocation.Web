import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events-list.component';
import { EventsAddComponent } from './events-add.component';
import { EventsEditComponent } from './events-edit.component';
import { EventsDeleteComponent } from './events-delete.component';

const routes: Routes = [
    {
        path: '', component: EventsListComponent
    },
     {
         path: 'add', component: EventsAddComponent
     },
     {
        path: 'edit', component: EventsEditComponent
    },
    {
        path: 'delete', component: EventsDeleteComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule {
}
