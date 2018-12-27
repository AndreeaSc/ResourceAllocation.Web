import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';
import { ServicesModule } from 'src/app/shared/services/services.module';

@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule, ServicesModule],
    declarations: [FormComponent]
})
export class FormModule {}
