import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DesignersListComponent } from './designers-list.component';
import { DesignersRoutingModule } from './designers-routing.module';
import { ServicesModule } from 'src/app/shared/services/services.module';
import { FormsModule } from '@angular/forms';
import { DesignersAddComponent } from './designers-add.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        DesignersRoutingModule,
        ServicesModule,
        FormsModule
    ],
    declarations: [
        DesignersListComponent,
        DesignersAddComponent
    ],
    exports: [
        DesignersListComponent,
        DesignersAddComponent
    ]
})
export class DesignersModule {}
