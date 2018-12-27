import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpService } from './http-service';

@NgModule({
    imports: [CommonModule, RouterModule],
    providers: [HttpService]
})
export class ServicesModule {}
