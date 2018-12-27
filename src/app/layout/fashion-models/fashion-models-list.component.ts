import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpService } from 'src/app/shared/services/http-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-fashion-models-list',
    templateUrl: './fashion-models-list.component.html',
    styleUrls: ['./fashion-models-list.component.scss'],
    animations: [routerTransition()]
})
export class FashionModelsListComponent implements OnInit {

    public fashionModels: Array<Object>;
    constructor(public httpService: HttpService, public router: Router) {}

    ngOnInit() {
        this.httpService.getFashionModels()
        .subscribe(response => { this.fashionModels = response; });
    }

    navigateToAddNewFashionModel() {
        this.router.navigate(['/fashion-models/add']);
    }
}
