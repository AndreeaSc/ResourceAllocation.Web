import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventsListComponent } from './events-list.component';
import { EventsRoutingModule } from './events-routing.module';
import { ServicesModule } from 'src/app/shared/services/services.module';
import { FormsModule } from '@angular/forms';
import { EventsAddComponent } from './events-add.component';
import { EventsEditComponent } from './events-edit.component';
import { EventsDeleteComponent } from './events-delete.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        EventsRoutingModule,
        ServicesModule,
        FormsModule
    ],
    declarations: [
        EventsListComponent,
        EventsAddComponent,
        EventsEditComponent,
        EventsDeleteComponent
    ],
    exports: [
        EventsListComponent,
        EventsAddComponent,
        EventsEditComponent,
        EventsDeleteComponent
    ]
})
export class EventsModule {}
